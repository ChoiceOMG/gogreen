import { getPageMeta } from '@/utils/getMeta';
import { Metadata } from 'next';

import { ContactUsSection } from '@/components/ContactUsSection';
import { ArticlesSkeleton } from '@/components/UI/skeletons';
import { getCategories, getTotalArticlesPages } from '@/services/data';
import { Suspense } from 'react';
import ArticlesSection from './components/ArticlesSection';
import { CategoriesSection } from './components/CategoriesSection';
import { MainSection } from './components/MainSection';
import Pagination from './components/Pagination';

export const metadata: Metadata = getPageMeta('/blog');

export default async function Page({
  searchParams
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getTotalArticlesPages();

  const categories = await getCategories();

  return (
    <>
      <MainSection />
      <CategoriesSection items={categories} />

      <Suspense key={currentPage} fallback={<ArticlesSkeleton />}>
        <ArticlesSection currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
      <ContactUsSection />
    </>
  );
}
