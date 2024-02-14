import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';

import { ContactUsSection } from '@/components/ContactUsSection';

import { MainSection } from './components/MainSection';
import { ContentSection } from './components/ContentSection';
import { RecommendedSection } from './components/RecommendedSection';
import { ArticlesDev } from '@/services/ArticlesDev';
import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Page({ params }: { params: { slug: [] } }) {
  const slug = params.slug;
  const url = slug[slug.length - 1];
  return (
    <>
      <MainSection
        title="This is Where the Blog Title Goes"
        subTitle="Blog Category"
        imgSrc="/images/history/main.png"
      />
      <ContentSection />
      <ContactUsSection />
      <RecommendedSection />
      <ArticlesSliderSection articles={ArticlesDev} className=" !pt-0" />
    </>
  );
}
