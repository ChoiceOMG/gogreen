import React from 'react';
import { ScrollExpandLine } from '../Animations';

type TextBlockProps = {
  title: string;
  subtitle: string;
  paragraph: string | React.ReactNode;
  className?: string;
  line?: boolean;
};

export const TextBlock: React.FC<TextBlockProps> = ({
  title,
  subtitle,
  paragraph,
  className = '',
  line = true
}) => {
  return (
    <div
      className={`flex flex-col justify-between relative pl-6
    ${className}
`}
    >
      <h4 className="h4 mb-4">{subtitle}</h4>
      <h2 className="h2 mb-4">{title}</h2>
      <div className="content">
        {paragraph instanceof String ? <p>{paragraph}</p> : paragraph}
      </div>
      {line && <ScrollExpandLine />}
    </div>
  );
};
