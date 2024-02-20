import React, { Suspense } from 'react';

import Wrapper from './components/Wrapper';
import { getCategories } from '@/app/services/data';
import { Loader } from '@/components/UI/Editor/LoaderEditor';

export default async function Page() {
  const Categories = await getCategories();

  return (
    <Suspense fallback={<Loader />}>
      <Wrapper Categories={Categories} />{' '}
    </Suspense>
  );
}
