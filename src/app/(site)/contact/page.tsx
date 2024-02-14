import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { Form } from '@/components/ContacFormSection/Form';
import { FAQ } from '@/components/FAQ';
import { MapSection } from './components/MapSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Contact Us"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/history/main.png"
      />
      <section>
        <div className="container">
          <Form />
        </div>
      </section>
      <MapSection />
      <FAQ />
    </>
  );
}
