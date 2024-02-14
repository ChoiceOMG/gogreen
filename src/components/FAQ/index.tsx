import React from 'react';
import { TextBlock } from '../UI/TextBlock';
import Accordion from '../UI/accordion';

export const FAQ = () => {
  const questions = [
    {
      title: 'FAQ Question',
      content:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      title: 'FAQ Question',
      content:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      title: 'FAQ Question',
      content:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    }
  ];
  return (
    <section className=" pb-28 lg:pb-44">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="FAQ"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />

          <div className=" space-y-7">
            {questions.map((question, index) => (
              <Accordion key={index} title={question.title}>
                <p>{question.content}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
