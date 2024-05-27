import { Button } from '@/components/UI/button';
import { TableSkeleton } from '@/components/UI/skeletons';
import { getTotalArticlesPages } from '@/services/data';
import Link from 'next/link';
import { Suspense } from 'react';
import Wrapper from './components/Articles';
import Pagination from './components/Pagination';
import Search from './components/Search';

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getTotalArticlesPages();
  return (
    <section className="py-10">
      <div className="container">
        <div className="sm:flex items-center justify-between">
          <h2 className="h2 mb-8">Articles - Blog</h2>

          <Button aial-label="New Post">
            <Link href="/admin/articles/new">New Post</Link>
          </Button>
        </div>
        <Search placeholder="Search articles..." />

        <section className=" py-20 lg:py-28">
          <div className="container">
            <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
              <Wrapper query={query} currentPage={currentPage} />
            </Suspense>
            <Pagination totalPages={totalPages} />
          </div>
        </section>
      </div>
    </section>
  );
}
