import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';
import { ContactUsSection } from '@/components/ContactUsSection';
import { getArticle } from '@/services/data';
import { getArticleMeta } from '@/utils/getMeta';
import { notFound } from 'next/navigation';
import { ContentSection } from './components/ContentSection';
import { MainSection } from './components/MainSection';
import { RecommendedSection } from './components/RecommendedSection';

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
