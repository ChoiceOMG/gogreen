import React from 'react';

export const MainSection = () => {
  return (
    <section className=" py-16 lg:py-28">
      <div className="container">
        <div className="flex flex-col relative z-[1] items-center justify-center text-center">
          <h4 className="h4 mb-7">Blog</h4>
          <h1 className="h1 mb-11 lg:mb-14">Blog Articles</h1>
          <p className=" mb-14 lg:mb-10 max-w-[600px] mx-auto">
            At Go Green, we’re not just a cleaning company. We’re your partners
            in creating a cleaner, healthier, and more sustainable environment
            for your business in Edmonton.
          </p>
        </div>
      </div>
    </section>
  );
};
