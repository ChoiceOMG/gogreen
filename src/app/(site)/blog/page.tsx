import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';

import { ContactUsSection } from '@/components/ContactUsSection';
import { MainSection } from './components/MainSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ArticlesDev, CategoriesDev } from '@/services/ArticlesDev';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection />
      <CategoriesSection items={CategoriesDev} />

      <ArticlesSection articles={ArticlesDev} />

      <ContactUsSection />
    </>
  );
}
