import { TextBlock } from '@/components/UI/TextBlock';
import React from 'react';

export const QuestionSection = () => {
  const questions = [
    { text: 'Do you Question Here?' },
    { text: 'Another question?' },
    { text: 'Do you Question Here?' },
    { text: 'Another question?' }
  ];

  return (
    <section className=" pb-28 lg:pb-44">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="For Whom It's Suitable"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />

          <div className=" space-y-7">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center">
                <div className="h4 w-[60px] h-[60px] bg-goGreen-green rounded-full flex items-center justify-center text-white mr-7">
                  {index + 1}
                </div>
                <p className="Accent uppercase">{question.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
