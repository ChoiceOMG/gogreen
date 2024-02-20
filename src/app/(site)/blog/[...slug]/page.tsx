import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';

import { ContactUsSection } from '@/components/ContactUsSection';

import { MainSection } from './components/MainSection';
import { ContentSection } from './components/ContentSection';
import { RecommendedSection } from './components/RecommendedSection';
import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';
import { getArticle } from '@/app/services/data';

export const metadata: Metadata = getPageMeta('/');

export default async function Page({ params }: { params: { slug: [] } }) {
  const slug = params.slug;
  const url = slug[slug.length - 1];
  const Article = await getArticle(url);
  return (
    Article && (
      <>
        <MainSection
          title={Article.title}
          subTitle={Article.category.name}
          imgSrc={Article.image || ''}
          dateObj={Article.date}
        />
        <ContentSection content={Article.description || ''} />
        <ContactUsSection />
        <RecommendedSection />
        <ArticlesSliderSection className=" !pt-0" />
      </>
    )
  );
}
