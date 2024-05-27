import { Suspense } from 'react';

import { getArticle, getCategories } from '@/services/data';
import Wrapper from './components/Wrapper';

import { Loader } from '@/components/UI/Editor/LoaderEditor';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { URL: string } }) {
  const Article = await getArticle(params.URL);
  const Categories = await getCategories();
  console.log(Article);
  if (!Article) {
    //redirect to articles page
    redirect('/admin/articles');
  }

  return (
    <Suspense fallback={<Loader />}>
      <Wrapper Article={Article} Categories={Categories} />
    </Suspense>
  );
}
