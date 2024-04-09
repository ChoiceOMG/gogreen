import { ContactUsSection } from '@/components/ContactUsSection';
import prisma from '@/app/db/client';
import { MainSection } from './components/MainSection';
import { ContentSection } from './components/ContentSection';
import { RecommendedSection } from './components/RecommendedSection';
import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';
import { getArticle } from '@/app/services/data';
import { _siteUrl } from '@/utils/constants';
import { getArticleMeta } from '@/utils/getMeta';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug;
  /*   const url = slug[slug.length - 1]; */
  // Await the async function and use its result

  const articleMeta = await getArticleMeta(slug);
  return articleMeta;
}

export default async function Page({ params }: { params: { slug: [] } }) {
  const slug = params.slug;
  const url = slug[slug.length - 1];
  const Article = await getArticle(url);
  if (!Article) {
    notFound();
    return null;
  }
  return (
    Article && (
      <>
        <MainSection
          title={Article.title}
          categories={Article.categories.map(category => category.category)}
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
