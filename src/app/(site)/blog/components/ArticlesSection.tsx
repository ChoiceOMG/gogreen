import { BubblePopComponent } from '@/components/Animations';
import ArticleCard from '@/components/UI/ArticleCard';
import { getArticlesByPage } from '@/services/data';

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
        <div className="flex flex-col  gap-24 lg:gap-36">
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
