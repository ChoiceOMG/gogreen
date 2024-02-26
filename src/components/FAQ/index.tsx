import React from 'react';
import { TextBlock } from '../UI/TextBlock';
import Accordion from '../UI/accordion';

export const FAQ = () => {
  const questions = [
    {
      title: 'What is commercial cleaning?',
      content:
        ' Commercial cleaning refers to a specialized service designed to keep commercial spaces clean and hygienic. Commercial cleaning services are comprehensive and often cover a variety of basic and specialized tasks. At GoGreen, our commercial cleaning services go beyond the ordinary. We provide eco-friendly and sustainable solutions for businesses.'
    },
    {
      title: 'Can GoGreen really save my business money?',
      content:
        "Opting for GoGreen's professional janitorial services means you can sidestep the expenses associated with hiring and managing in-house cleaning staff. Our solutions ensure that you pay for the services you need, avoiding unnecessary expenses. GoGreen offers a cost-effective solution that allows you to redirect your resources toward growing your core business."
    },
    {
      title: 'How often should an office be cleaned?',
      content:
        "Generally, offices benefit from a weekly cleaning schedule to maintain a consistently clean and healthy environment. However, at GoGreen, we understand that each office is unique, with distinct cleaning requirements. That's why we offer bespoke solutions. Depending on the size, foot traffic, and specific needs of your space, we can customize  cleaning frequency and ensure optimal cleanliness and hygiene."
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
