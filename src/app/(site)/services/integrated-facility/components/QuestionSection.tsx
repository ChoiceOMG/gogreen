import { TextBlock } from '@/components/UI/TextBlock';
import React from 'react';

export const QuestionSection = () => {
  const questions = [
    {
      text: 'Facilities spanning over 500K sq. ft. with numerous employees and locations.'
    },
    { text: 'Favor a streamlined contract with a single provider.' },
    {
      text: 'Seek to oversee and measure performance for efficient and dependable operations.'
    },
    { text: 'Require adherence to building codes.' }
  ];

  return (
    <section className=" pb-28 lg:pb-44">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="For Whom It's Suitable"
            paragraph="GoGreen services are specifically crafted to cater to the needs of clients who operate large facilities, spanning over 500,000 square feet, with numerous employees and multiple locations. Our expertise is particularly beneficial for those who prefer a streamlined approach from a single provider. We also have ample experience adhering to building codes and other regulations."
          />

          <div className=" space-y-7">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center">
                <div className="h4 min-w-[60px] min-h-[60px] bg-goGreen-green rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <p className="Accent uppercase pl-7">{question.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
