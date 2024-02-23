import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { Form } from '@/components/ContacFormSection/Form';
import { FAQ } from '@/components/FAQ';
import { MapSection } from './components/MapSection';
import { SecondSection } from './components/SecondSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Contact Us"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/history/main.png"
        classNames="!pb-8"
      />
      <section>
        <div className="container">
          <Form />
        </div>
      </section>
      <SecondSection />
      <MapSection />
      <FAQ />
    </>
  );
}
