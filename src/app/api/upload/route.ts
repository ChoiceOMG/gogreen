import { sanitizeKey } from '@/utils/keys';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

// Add back the promise for uploadImageToS3 if needed.

const CDN_HOST = 'https://' + process.env.AWS_CLOUDFRONT_DOMAIN;
const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

function getDayOfYear() {
  const now = new Date() as any;
  const start = new Date(now.getFullYear(), 0, 0) as any;
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

function createKey(fileName: string): string {
  let key: string;
  const dayOfYear = getDayOfYear();
  key = '/uploads/' + dayOfYear + '/' + sanitizeKey(fileName);
  return key;
}

function uploadImageToS3(
  file: Buffer,
  fileNameOnServer: string,
  mimeType: string,
  s3Client: S3Client
) {
  const key = createKey(fileNameOnServer);
  const params = {
    Bucket: BUCKET_NAME,
    Key: `public${key}`,
    Body: file,
    ContentType: mimeType
  };
  const command = new PutObjectCommand(params);
  return s3Client
    .send(command)
    .then(data => {
      return `${CDN_HOST}${key}`;
    })
    .catch(error => {
      console.log('uploadImageToS3 Error', JSON.stringify(error, null, 2));
      throw new Error('Error uploading image to S3.');
    });
}

export async function POST(request: NextRequest, response: NextResponse) {
  if (
    !AWS_ACCESS_KEY_ID ||
    !AWS_SECRET_ACCESS_KEY ||
    !BUCKET_NAME ||
    !BUCKET_REGION ||
    !CDN_HOST
  ) {
    throw new Error('Missing critical environment variables.');
  }

  const s3Client = new S3Client({
    region: BUCKET_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  });

  try {
    const formData = await request.formData();
    const file = formData.get('image') as Blob;

    if (!file) {
      throw new Error('File blob is required.');
    }

    const mimeType = file.type;
    const fileExtension = mimeType.split('/')[1];
    const fileName = uuid() + '.' + fileExtension;

    const buffer = Buffer.from(await file.arrayBuffer());

    const imageUrl = await uploadImageToS3(
      buffer,
      fileName,
      mimeType,
      s3Client
    );

    console.log('imageUrl', imageUrl);

    return NextResponse.json({
      success: true,
      file: {
        url: imageUrl
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
