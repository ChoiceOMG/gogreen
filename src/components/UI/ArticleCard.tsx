import Image from 'next/image';
import { Button } from './button';
import { Article, ArticleCategory, Category } from '@prisma/client';
import slugify from '@/utils/slugify';
import Link from 'next/link';

function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

const ArticleCard = ({
  post
}: {
  post: Article & { categories: { category: Category }[] };
}) => {
  const excerptContent = truncateString(post.excerpt || '', 450);

  const link = `/blog/${slugify(post.categories[0].category.name)}/${post.URL}`;

  return (
    <div className="grid lg:grid-cols-[1.5fr_2fr] gap-20 lg:gap-12 relative lg:pb-28">
      <div className="max-lg:pr-14 max-md:min-h-[350px]">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={500}
            className="object-cover rounded-end-start h-full w-auto"
            quality={100}
          />
        )}
      </div>
      <div className="flex flex-col lg:pr-12">
        <div className="mt-auto">
          <div className="flex flex-wrap gap-4">
            {' '}
            {post.categories.map(category => (
              <Link
                className="h4 text-goGreen-green mb-4"
                key={category.category.id}
                href={`/blog/${category.category.link}`}
              >
                {category.category.name}
              </Link>
            ))}
          </div>

          <h2 className="h2 mb-8">{post.title}</h2>
          <p className="mb-9">{excerptContent}</p>
          <Button
            link={link}
            variant={'black'}
            linkProps={{ title: 'Read More' }}
            className="w-fit uppercase"
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="max-md:w-screen max-md:h-[100vw] w-1/2 h-full max-h-full max-w-full  z-[-1] rounded-tr-[40px] max-lg:right-0 rounded-bl-[40px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] absolute bg-goGreen-mint top-0 mt-10  lg:left-16"></div>
    </div>
  );
};

export default ArticleCard;
