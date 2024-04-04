import { Leaf } from '@/components/UI/SVG/Leaf';
import React from 'react';
import Parallax from '../Animations/Parallax';

export const WhyUsSection = () => {
  const List = [
    {
      title: 'Environmental Responsibility',
      text: (
        <>
          <p>
            Our dedication to eco-friendly janitorial and maintenance services
            makes us the perfect partner for keeping your premises in pristine
            condition.
          </p>
          <p>
            We do more than just clean – we care for the planet`s health and
            future generations.
          </p>
        </>
      )
    },
    {
      title: 'Customized Services',
      text: (
        <>
          <p>
            At Go Green, we don’t offer one-size-fits-all solutions. We tailor
            our services to meet your specific needs and budget.{' '}
          </p>
          <p>
            This means you receive not only top-quality cleaning but also a
            service that perfectly matches your business.
          </p>
        </>
      )
    },
    {
      title: 'Competitive Advantage',
      text: (
        <>
          <p>
            Our exclusive green cleaning solutions not only ensure your space is
            impeccably clean but also enhance its appearance, directly impacting
            your competitive edge in the market.
          </p>
          <p>
            With Go Green, your business will stand out due to its high level of
            environmental responsibility and attractiveness to customers.
          </p>
        </>
      )
    }
  ];
  return (
    <section className=" bg-goGreen-mint relative">
      <Parallax>
        <Leaf className="absolute -top-10 right-5 opacity-40" size={'large'} />
      </Parallax>
      <Parallax offset={80}>
        <Leaf
          className="absolute top-8 md:top-20 right-5 md:right-14  rotate-90"
          size={'small'}
        />
      </Parallax>
      <div className="container">
        <div className=" pt-20 pb-36">
          <div className="text-center  mb-14">
            <h4 className="h4 mb-4">
              Embrace Sustainability Without Compromising Clean
            </h4>
            <h2 className="h2">Why Choose Us?</h2>
          </div>
          <div className="grid-cust">
            {List.map((item, index) => (
              <div key={index}>
                <h4 className="h4 mb-4">{item.title}</h4>
                <div className="content">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
