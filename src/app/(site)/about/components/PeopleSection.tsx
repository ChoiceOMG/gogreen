import React from 'react';
import { UserDesc } from '@/components/UI/UserDesc';
export const PeopleSection = () => {
  const people = [
    {
      name: 'Nina Paul',
      img: '/images/about/user.png',
      text: 'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      name: 'Name',
      img: '/images/about/user.png',
      text: 'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      name: 'Name',
      img: '/images/about/user.png',
      text: 'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    }
  ];

  return (
    <section className=" py-20 lg:py-44">
      <div className="container">
        <div className="grid-cust">
          {people.map((person, index) => (
            <UserDesc
              name={person.name}
              img={person.img}
              text={person.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
