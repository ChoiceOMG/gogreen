import ScrollStopper from '@/components/UI/ScrollStopper';
import { StatsAndTypes } from '@/components/UI/StatsAndTypes';
import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';

import React from 'react';

export const AboutSection = () => {
  return (
    <section className="pb-20 lg:pb-44">
      <div className="container">
        <ScrollStopper>
          <TextAndImagesSection
            subtitle="Built by Veteran Industry Leaders Rex Clancy and Wayne Gooding"
            title="About Us"
            paragraph="Edmonton`s leading provider of sustainable cleaning solutions and comprehensive facility care. Our eco-friendly approach is clean, healthy, and environmentally responsible. Entrust your facilities to Go Green and enjoy peace of mind with the highest standards of green efficiency. Our service spans from detailed cleaning to preventive maintenance. Let us handle the cleanliness of your facility while you concentrate on your business."
            image1Src="/images/home/about_1.png"
            image2Src="/images/home/about_2.png"
          />
          <StatsAndTypes
            stats={[
              { title: '55+', subtitle: 'Years of Commercial Experience' },
              { title: '36', subtitle: 'Hours of CI Training per employee' },
              {
                title: '364',
                subtitle: 'Edmonton facilities cleaned since 2021'
              }
            ]}
          />
        </ScrollStopper>
      </div>
    </section>
  );
};
