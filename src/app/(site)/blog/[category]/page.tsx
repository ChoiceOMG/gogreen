import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';

import { ContactUsSection } from '@/components/ContactUsSection';
import { MainSection } from '../components/MainSection';
import { CategoriesSection } from '../components/CategoriesSection';

import ArticlesSection from '../components/ArticlesSection';
import {
  getCategories,
  getCategory,
  getTotalArticlesPages
} from '@/app/services/data';
import { Suspense } from 'react';
import { ArticlesSkeleton } from '@/components/UI/skeletons';
import Pagination from '../components/Pagination';

export const metadata: Metadata = getPageMeta('/');

export default async function Page({
  searchParams,
  params
}: {
  searchParams?: {
    page?: string;
  };
  params: { category: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const link = params.category;
  const category = await getCategory(link);

  const totalPages = await getTotalArticlesPages(link);
  const categories = await getCategories();

  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <>
      <MainSection />
      <CategoriesSection items={categories} />
      <Suspense key={currentPage} fallback={<ArticlesSkeleton />}>
        <ArticlesSection currentPage={currentPage} category={link} />
      </Suspense>
      <Pagination totalPages={totalPages} />
      <ContactUsSection />
    </>
  );
}
