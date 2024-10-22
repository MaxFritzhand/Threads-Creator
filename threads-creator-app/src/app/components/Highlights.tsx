import React from 'react';

const Highlights: React.FC = () => {
  return (
    <div className="highlights mt-8">
      <h2 className="text-2xl mb-4">This Week&apos;s Highlights</h2>
      <div className="highlight-item mb-4">
        <strong>@samaltman</strong>: launches WorldCoin: The Movie where AI characters fight for blockchain dominance in a dystopian world where data is traded like currency.
      </div>
      <div className="highlight-item mb-4">
        <strong>@barnes&noble </strong>: is officially pivoting into a nightclub and will now be called “Barnes & Bongo.
      </div>
      <div className="highlight-item mb-4">
        <strong>@zuck</strong>: Challenges Entire Internet to a ‘Metaverse MMA Fight’ After Accidentally Turning Off Facebook.
      </div>
      <div className="highlight-item mb-4">
        <strong>@mosseri</strong>: was banned while live streaming an Instagram update announcement. The AI mistook his iconic glasses for “dangerous weapons.”
      </div>
      <div className="highlight-item mb-4">
        <strong>@bolta.ai</strong>: Scheduled over 100 posts automatically, but one post turned out to be a Rick Roll. The irony is strong.
      </div>
    </div>
  );
};

export default Highlights;
