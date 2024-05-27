import { InfoCard } from '@/components/UI/InfoCard';
import { HandMagicIcon } from '@/components/UI/SVG/HandMagicIcon';
import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { MagicStickIcon } from '@/components/UI/SVG/MagicStickIcon';
import { ThumbIcon } from '@/components/UI/SVG/ThumbIcon';
import { VictoryCupIcon } from '@/components/UI/SVG/VictoryCupIcon';
import { Button } from '@/components/UI/button';
import React from 'react';

export const SecondSection = () => {
  const List = [
    {
      title: 'Eco-Friendly Cleaning Innovators',
      paragraph: (
        <>
          <p>
            At GoGreen Facilities Services Inc., we`re more than a cleaning
            service; we lead the way in incorporating eco-friendly practices
            throughout our business.
          </p>
          <p>
            From biodegradable cleaning products to water-saving techniques, we
            prioritize reducing environmental impact while maintaining
            cleanliness. Our innovative approach guarantees a spotless
            commercial space that promotes planetary health.
          </p>
        </>
      ),
      icon: <LeafIcon />
    },
    {
      title: 'Tailored Solutions with Advanced Technology',
      paragraph: (
        <>
          <p>
            Leveraging the latest in digital technology, GoGreen Facilities
            Services Inc. offers customized cleaning and facility maintenance
            plans that adapt to your unique needs.
          </p>
          <p>
            Our digital project tracking and communication tools enable
            unparalleled efficiency and responsiveness. This means more than
            just a clean environment; it`s about providing a service that fits
            seamlessly into your operations, enhancing your productivity and
            peace of mind.
          </p>
        </>
      ),
      icon: <MagicStickIcon />
    },
    {
      title: 'Comprehensive Industry Expertise',
      paragraph: (
        <>
          <p>
            With decades of combined experience and a broad service portfolio,
            GoGreen Facilities Services Inc. stands out as a versatile partner
            for any industry. Whether it`s commercial, educational, healthcare,
            or industrial sectors, our team has the depth of knowledge to tackle
            specific challenges. Our strength lies in our ability to understand
            and meet the distinct requirements of various facilities, delivering
            exceptional service that supports your business`s success and
            well-being.
          </p>
        </>
      ),
      icon: <ThumbIcon />
    }
  ];
  return (
    <section className=" py-14 lg:py-28">
      <div className="container">
        <div className="grid-cust">
          {List.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
