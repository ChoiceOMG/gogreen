import { ScrollExpandLine } from '@/components/Animations';
import React from 'react';
import { Form } from './Form';

export const ContactUsSection = () => {
  return (
    <section className="py-20 lg:py-44">
      <div className="container">
        <div className="relative pl-6">
          <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />

          <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
          <h2 className="h2 mb-8">Contact Us</h2>

          <Form />
        </div>
      </div>
    </section>
  );
};
