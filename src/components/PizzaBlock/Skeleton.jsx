import React from 'react';

import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <div className="pizza-block">
      <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="142" cy="127" r="127" />
        <rect x="0" y="266" rx="5" ry="5" width="280" height="24" />
        <rect x="1" y="312" rx="10" ry="10" width="280" height="85" />
        <rect x="148" y="413" rx="10" ry="10" width="130" height="40" />
        <rect x="0" y="419" rx="10" ry="10" width="130" height="30" />
      </ContentLoader>
    </div>
  );
};
