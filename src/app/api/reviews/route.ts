import { NextResponse } from 'next/server';
import { _siteUrl } from '@/utils/constants';
import { dataDev } from './dataDev';
import { GoogleReview } from '@/types/types';
import axios from 'axios';
const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

export async function GET() {
  try {
    console.log('getGoogleReviews');
    const testimonials = await getGoogleReviews();

    const json_response = {
      status: 'success',
      data: testimonials
    };
    console.log('json_response', json_response);
    return NextResponse.json(json_response);
  } catch (error: any) {
    const error_response = {
      status: 'error',
      message: error.message
    };
    return NextResponse.json(error_response);
  }
}

async function getGoogleReviews(): Promise<GoogleReview[]> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`;
  const response = await axios.get(url);
  console.log('response', response);
  if (response.data.status === 'OK') {
    const reviews: GoogleReview[] = response.data.result.reviews;
    console.log('reviews', reviews);

    return reviews;
  } else {
    return dataDev;
  }
}
