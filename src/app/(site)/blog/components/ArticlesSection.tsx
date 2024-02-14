import ArticleCard from '@/components/UI/ArticleCard';
import { Article } from '@/types/types';
import React from 'react';
type Props = {
  articles: Article[];
};

export const ArticlesSection = ({ articles }: Props) => {
  return (
    <section className=" pt-8 lg:pt-16 pb-28 lg:pb-44">
      <div className="container">
        {!articles && <h3 className="h3 text-center">No articles found</h3>}
        <div className="flex flex-col  space-y-24 lg:space-y-36">
          {articles.map((item, index) => (
            <ArticleCard
              key={index}
              img={item.img}
              title={item.title}
              category={item.category}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
