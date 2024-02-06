import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from './components/MainSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Home() {
  return (
    <>
      <MainSection />
    </>
  );
}
