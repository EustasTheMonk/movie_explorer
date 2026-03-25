import React from 'react';

interface MediaGridProps {
  children: React.ReactNode
}

const MediaGrid: React.FC<MediaGridProps> = ({children}) => {
  return (
      <div className={'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4'}>
        {children}
      </div>
  );
};

export default MediaGrid;