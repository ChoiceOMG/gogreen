import { GoogleReviews } from '@/components/GoogleReviewsBlock';
import { ReviewsSlider } from './ReviewsSlider';
import { GetReviews } from '@/services/data';

export const ReviewsSection = async ({
  className = ''
}: {
  className?: string;
}) => {
  const reviewsData = await GetReviews();
  console.log('reviewsData', reviewsData);
  return (
    <section className={`relative  ${className}`}>
      <div className="container">
        <div className="max-lg:grid lg:flex gap-14 md:gap-4">
          <div className=" basis-1/3">
            <GoogleReviews />
          </div>
          <div className="basis-2/3 overflow-x-hidden">
            <ReviewsSlider reviewsData={reviewsData.reviews} />
          </div>
        </div>
      </div>
    </section>
  );
};
