import { getArticlesByPage } from '@/services/data';
import Posts from './Posts';

export default async function Wrapper({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const posts = await getArticlesByPage(currentPage, undefined, query, false);

  return (
    <>
      <div className="overflow-auto">
        <Posts posts={posts} />
      </div>
    </>
  );
}
