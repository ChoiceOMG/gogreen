import { Button } from '@/components/UI/button';
import React from 'react';

export const ContactSection = () => {
  return (
    <section className=" bg-goGreen-mint py-16 relative mb-36 lg:mb-56">
      <div className="container">
        <div className="flex justify-center items-center  flex-col">
          <h4 className="h4 mb-4 text-center">
            Your Partner for Eco-Friendly Cleaning
          </h4>
          <h2 className="h2 mb-11 max-w-[800px] mx-auto text-center">
            Contact Us For Custom Solutions for Your Facility
          </h2>
          <p className=" max-w-[600px] mx-auto text-center">
            At Go Green, we’re not just a cleaning company. We’re your partners
            in creating a cleaner, healthier, and more sustainable environment
            for your business in Edmonton.
          </p>
          <Button
            link="/contact"
            variant={'green'}
            linkProps={{ title: 'Contact' }}
            className="w-fit mt-14"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
