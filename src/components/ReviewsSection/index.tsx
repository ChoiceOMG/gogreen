import { GoogleReviews } from '@/components/GoogleReviewsBlock';
import React from 'react';
import { ReviewsSlider } from './ReviewsSlider';

export const ReviewsSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={`relative  ${className}`}>
      <div className="container">
        <div className="max-lg:grid lg:flex gap-14 md:gap-4">
          <div className=" basis-1/3">
            <GoogleReviews />
          </div>
          <div className="basis-2/3 overflow-x-hidden">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
