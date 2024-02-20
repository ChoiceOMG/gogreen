'use client';

import Boundary from '@/components/UI/boundary';
import React from 'react';

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <div className="py-20">
      <Boundary labels={['./error.tsx']} color="pink">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Error</h2>
          <p className="text-sm">{error?.message}</p>
          <div>
            <button className="button" onClick={() => reset()}>
              Try Again
            </button>
          </div>
        </div>
      </Boundary>
    </div>
  );
}
