import { getArticlesByPage } from '@/app/services/data';
import { BubblePopComponent } from '@/components/Animations';
import ArticleCard from '@/components/UI/ArticleCard';
import { Article } from '@/types/types';
import React from 'react';

export default async function ArticlesSection({
  currentPage,
  category
}: {
  currentPage: number;
  category?: string;
}) {
  const posts = await getArticlesByPage(currentPage, category);

  return (
    <section className=" pt-8 lg:pt-16 pb-28 lg:pb-44">
      <div className="container">
        {(!posts || posts.length <= 0) && (
          <h3 className="h3 text-center">No articles found</h3>
        )}
        <div className="flex flex-col  space-y-24 lg:space-y-36">
          {posts.map((item, index) => (
            <BubblePopComponent
              delay={index * 0.1}
              key={index}
              initialScale={0.8}
              stiffness={300}
            >
              <ArticleCard key={index} post={item} />
            </BubblePopComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
