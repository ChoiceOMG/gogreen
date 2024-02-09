import { InfoCard } from '@/components/UI/InfoCard';
import { HandMagicIcon } from '@/components/UI/SVG/HandMagicIcon';
import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { VictoryCupIcon } from '@/components/UI/SVG/VictoryCupIcon';
import React from 'react';

export const SecondSection = () => {
  const List = [
    {
      title: 'Our Journey',
      paragraph:
        'From humble beginnings to a leading force in eco-friendly services, Go Green`s journey continues along the path to commitment to sustainability. We`re constantly innovating and adopting the latest green practices to serve you better. Our team, trained in advanced eco-friendly techniques, is equipped to meet your needs with excellence.',
      buttonLink: '/our-journey',
      icon: <LeafIcon />
    },
    {
      title: 'Our Technologies',
      paragraph:
        'At Go Green, we combine advanced green cleaning technologies with sustainable practices to clean and enhance your workplace`s health and productivity. Experience the Go Green difference and join our growing list of satisfied clients in Edmonton, benefiting from a range of tailored cleaning and maintenance services that promise to deliver cleanliness and environmental stewardship.',
      buttonLink: '/our-technologies',
      icon: <HandMagicIcon />
    },
    {
      title: 'Our Experience',
      paragraph:
        'Founded by industry veterans Wayne and Rex, and currently managed by Nina Paul, our leadership brings decades of combined experience to the forefront of our operations. This depth of knowledge and passion for service has positioned us as a leader in providing eco-friendly cleaning solutions to a diverse range of sectors.',
      buttonLink: '/why-us',
      icon: <VictoryCupIcon />
    }
  ];
  return (
    <section className=" pb-56">
      <div className="container">
        <div className="grid-cust">
          {List.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              buttonLink={item.buttonLink}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
