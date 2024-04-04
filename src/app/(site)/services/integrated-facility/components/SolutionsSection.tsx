import Parallax from '@/components/Animations/Parallax';
import { Leaf } from '@/components/UI/SVG/Leaf';
import React from 'react';

export const SolutionsSection = () => {
  return (
    <section className="relative pb-28 lg:pb-44">
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
        <div className="flex items-center justify-center flex-col max-w-[600px] mx-auto text-center">
          <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
          <h2 className="h2 mb-11">Custom Solutions</h2>
          <div className="content">
            <p>
              {' '}
              At GoGreen, we understand that one size does not fit all. That`s
              why we offer more than just basic cleaning services. Our
              commitment to excellence extends to providing custom solutions
              designed to meet your unique needs.{' '}
            </p>
            <p>
              {' '}
              Elevate your expectations and choose GoGreen for bespoke solutions
              that go above and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
