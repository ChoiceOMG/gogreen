import Image from 'next/image';
import { Button } from './button';

type ArticleCardProps = {
  img: string;
  title: string;
  category: {
    title: string;
    url: string;
  };
  description: string;
  link: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  img,
  title,
  category,
  description,
  link
}) => {
  return (
    <div className="grid lg:grid-cols-[1.5fr_2fr] gap-20 lg:gap-12 relative lg:pb-28">
      <div className="max-lg:pr-14">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="object-cover rounded-end-start"
          quality={100}
        />
      </div>
      <div className="flex flex-col lg:pr-12">
        <div className="mt-auto">
          <h4 className="h4 text-goGreen-green mb-4">{category.title}</h4>
          <h2 className="h2 mb-8">{title}</h2>
          <p className="mb-9">{description}</p>
          <Button
            link={'/blog' + category.url + link}
            variant={'black'}
            linkProps={{ title: 'Read More' }}
            className="w-fit uppercase"
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="w-[270px] h-[270px] sm:w-[470px] sm:h-[470px] xl:w-[570px] xl:h-[570px] z-[-1] rounded-tr-[40px] max-lg:right-0 rounded-bl-[40px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] absolute bg-goGreen-mint top-10  lg:left-16"></div>
    </div>
  );
};

export default ArticleCard;
