import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';

import { ContactUsSection } from '@/components/ContactUsSection';
import { MainSection } from './components/MainSection';
import { CategoriesSection } from './components/CategoriesSection';
import { getCategories, getTotalArticlesPages } from '@/app/services/data';
import { Suspense } from 'react';
import { ArticlesSkeleton } from '@/components/UI/skeletons';
import Pagination from './components/Pagination';
import ArticlesSection from './components/ArticlesSection';

export const metadata: Metadata = getPageMeta('/');

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
