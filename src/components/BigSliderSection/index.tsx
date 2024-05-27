import { ScrollExpandLine } from '@/components/Animations';
import { Slider } from './Slider';

export const IndustriesSection = async ({
  title,
  subTitle,
  items
}: {
  title: string;
  subTitle: string;
  items: {
    title: string;
    description?: string;
    link: string;
    linkTitle?: string;
    img?: string;
  }[];
}) => {
  return (
    <section className=" pb-20 lg:pb-44">
      <div className="container">
        <div className="relative pl-6">
          {' '}
          <h4 className="h4 mb-4">{subTitle}</h4>
          <h2 className="h2 mb-11">{title}</h2>
          <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />
          <Slider items={items} />
        </div>
      </div>
    </section>
  );
};
