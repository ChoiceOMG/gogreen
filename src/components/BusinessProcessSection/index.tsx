import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { TextBlock } from '@/components/UI/TextBlock';
import React from 'react';

export const BusinessProcessSection = () => {
  const process = [
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' },
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' },
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' },
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' },
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' },
    { icon: <LeafIcon variant="green" />, text: 'Why GoGreen' }
    // Add more items as needed
  ];

  return (
    <section className=" pb-28 lg:pb-44">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Business Process"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-14">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.icon}
                <p className="Accent uppercase mt-4 text-goGreen-green">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
