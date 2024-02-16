import { InfoCard } from '@/components/UI/InfoCard';
import { HandMagicIcon } from '@/components/UI/SVG/HandMagicIcon';
import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { VictoryCupIcon } from '@/components/UI/SVG/VictoryCupIcon';
import React from 'react';

export const SecondSection = () => {
  const List = [
    {
      title: 'Facilities Cleaning Services',
      paragraph:
        'From light duty maintenance to general cleaning and janitorial services, GGF Services has you covered. With over 40 years of experience in the cleaning and janitorial business you can trust our experienced team to keep your workspaces clean and safe year round.',

      icon: <LeafIcon />
    },
    {
      title: 'Office & Building Janitorial Services',
      paragraph:
        'Full janitorial services available on a regularly scheduled basis, or one time service. Call us or request a quote at your convenience.',

      icon: <HandMagicIcon />
    },
    {
      title: 'Book A Cleaning Service Or Contact Us with Questions, RFPs.',
      paragraph: 'Text, text, text, text, text…..',

      icon: <VictoryCupIcon />
    }
  ];
  return (
    <section className=" pt-16 sm:pt-28">
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
