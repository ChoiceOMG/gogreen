import { Suspense } from 'react';

import { Loader } from '@/components/UI/Editor/LoaderEditor';
import { getCategories } from '@/services/data';
import Wrapper from './components/Wrapper';

export default async function Page() {
  const Categories = await getCategories();

  return (
    <Suspense fallback={<Loader />}>
      <Wrapper Categories={Categories} />{' '}
    </Suspense>
  );
}
