import React from 'react';

export const ContentSection = ({ content }: { content: string }) => {
  return (
    <section className=" pb-28 lg:pb-48">
      <div className="container">
        <div
          className="max-w-[800px] content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </section>
  );
};
