import React from 'react';
import styles from './InfoAlert.module.css';

const InfoAlert: React.FC = () => {
  return (
    <div className={styles.infoAlert}>
      <p>
        🚀 <strong>Weekly Highlights Sync:</strong> Future highlights will be synced to Bolta, 
        providing you with an auto-generated summary.
      </p>
    </div>
  );
};

export default InfoAlert;
