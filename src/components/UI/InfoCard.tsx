import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { Button } from '@/components/UI/button';
import React from 'react';

type InfoCardProps = {
  title: string;
  icon?: React.ReactNode;
  paragraph: string | React.ReactNode;
  buttonLink?: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  paragraph,
  icon,
  buttonLink
}) => {
  return (
    <div className="flex flex-col ">
      {icon && <div className="mb-4">{icon}</div>}
      <h4 className="h4 mb-4">{title}</h4>
      <div className="content">{paragraph}</div>

      {buttonLink && (
        <div className="mt-auto">
          <Button
            variant={'green'}
            link={buttonLink}
            linkProps={{ title: 'Learn More' }}
            className="w-fit uppercase mt-9"
          >
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
};
