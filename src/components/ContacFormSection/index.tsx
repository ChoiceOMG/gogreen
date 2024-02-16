import { ScrollExpandLine } from '@/components/Animations';
import React from 'react';
import { Form } from './Form';
import { Button } from '../UI/button';

export const ContacFormSection = () => {
  return (
    <section className="py-20 lg:py-44">
      <div className="container">
        <div className="relative pl-6">
          <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />

          <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
          <h2 className="h2 mb-8">Contact Us</h2>

          <Form className="max-md:-ml-6 max-sm:hidden" />

          <Button
            variant={'secondary'}
            link={'/contact'}
            className="sm:hidden"
            linkProps={{ title: 'Contact Page' }}
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};
