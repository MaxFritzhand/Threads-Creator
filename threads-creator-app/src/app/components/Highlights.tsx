import React from 'react';
import styles from './Highlights.module.css';
import InfoAlert from './InfoAlert';

const Highlights: React.FC = () => {
  return ( 
    <div className={styles.highlightsContainer}>

      <h2 className="text-3xl font-bold mb-6">This Week&apos;s Highlights</h2>
      <div className={styles.highlightItem}>
        <strong>@samaltman</strong>: launches WorldCoin: The Movie where AI characters fight for blockchain dominance in a dystopian world where data is traded like currency.
      </div>
      <div className={styles.highlightItem}>
        <strong>@barnes&noble </strong>: is officially pivoting into a nightclub and will now be called “Barnes & Bongo.
      </div>
      <div className={styles.highlightItem}>
        <strong>@zuck</strong>: Challenges Entire Internet to a ‘Metaverse MMA Fight’ After Accidentally Turning Off Facebook.
      </div>
      <div className={styles.highlightItem}>
        <strong>@mosseri</strong>: was banned while live streaming an Instagram update announcement. The AI mistook his iconic glasses for “dangerous weapons.”
      </div>
      <div className={styles.highlightItem}>
        <strong>@bolta.ai</strong>: Scheduled over 100 posts automatically, but one post turned out to be a Rick Roll. The irony is strong.
      </div>
      <InfoAlert />
    </div>
  );
};

export default Highlights;
