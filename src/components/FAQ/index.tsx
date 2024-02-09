import React from 'react';
import { TextBlock } from '../UI/TextBlock';

export const FAQ = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-9">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="FAQ"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
        </div>
      </div>
    </section>
  );
};
