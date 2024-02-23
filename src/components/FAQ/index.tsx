import React from 'react';
import { TextBlock } from '../UI/TextBlock';
import Accordion from '../UI/accordion';

export const FAQ = () => {
  const questions = [
    {
      title: 'What is commercial cleaning?',
      content:
        ' Commercial cleaning refers to a specialized service designed keep commerical spaces cleanly and hygenic. Commercial cleaning services are comprehensive and often cover a variety of basic and specilized tasks. At GoGreen, our commercial cleaning services go beyond the ordinary. We specialize in providing eco-friendly and sustainable solutions for businesses.'
    },
    {
      title: 'Can GoGreen really save my business money?',
      content:
        "Opting for GoGreen's professional janitorial services means you can sidestep the expenses associated with hiring and managing in-house cleaning staff. Our tailored solutions ensure that you pay for the services you need, avoiding unnecessary expenses. GoGreen offers a cost-effective solution that allows you to redirect your resources towards growing your core business while enjoying a pristine and sustainable work environment."
    },
    {
      title: 'How often should an office be cleaned?',
      content:
        "Generally, offices benefit from a weekly cleaning schedule to maintain a consistently clean and healthy environment. However, at GoGreen, we understand that each office is unique, with distinct cleaning requirements. That's why we offer tailored solutions. Depending on the size, foot traffic, and specific needs of your office space, we can customize a cleaning frequency that ensures optimal cleanliness and hygiene."
    },
    {
      title:
        'How does GoGreen ensure personalized solutions for clients with diverse needs?',
      content:
        "We understand that every client is unique. Our services are tailored to meet the specific janitorial needs of each client, whether it's a large facility or a luxury residence. Our commitment to customization and extensive industry experience ensures a perfect fit for every space."
    },
    {
      title:
        'Can GoGreen handle cleaning services for facilities with strict building codes?',
      content:
        'Absolutely. GoGreen is well-versed in adhering to building codes. Our services are designed to meet and exceed regulatory requirements, providing clients with confidence in compliance.'
    },
    {
      title: 'Can GoGreen handle emergency cleaning services?',
      content:
        'Absolutely. GoGreen is equipped to provide rapid response emergency restoration services. Our expert team is available to mitigate damage, restore properties, and bring peace of mind during challenging times.'
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
