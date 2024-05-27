
import { TableSkeleton } from '@/components/UI/skeletons';
import { getCategories } from '@/services/data';
import { Suspense } from 'react';

import { CreateCategoryButton } from './components/CreateCategoryButton';
import List from './components/List';

export default async function Page() {
  const categories = await getCategories();
  return (
    <section className="py-10">
      <div className="container">
        <div className="sm:flex items-center justify-between">
          <h2 className="h2 mb-8">Categories</h2>

          <CreateCategoryButton />
        </div>

        <section className=" py-20 lg:py-28">
          <div className="container">
            <Suspense fallback={<TableSkeleton />}>
              <List categories={categories} />
            </Suspense>
          </div>
        </section>
      </div>
    </section>
  );
}
