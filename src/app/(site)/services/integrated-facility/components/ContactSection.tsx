import { Button } from '@/components/UI/button';
import React from 'react';

export const ContactSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={' bg-goGreen-mint py-16 relative ' + className}>
      <div className="container">
        <div className="flex justify-center items-center  flex-col">
          <h4 className="h4 mb-4 text-center">
            Your Partner for Eco-Friendly Cleaning
          </h4>
          <h2 className="h2 mb-11 max-w-[800px] mx-auto text-center">
            Contact Us For Custom Solutions for Your Facility
          </h2>
          <div className=" max-w-[600px] mx-auto text-center content">
            <p>
              Ready to transform your cleaning experience? Get in touch with
              GoGreen today to discover tailored janitorial solutions that
              elevate cleanliness while prioritizing sustainability. Our team is
              dedicated to providing services that go beyond expectations.
            </p>
          </div>
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
