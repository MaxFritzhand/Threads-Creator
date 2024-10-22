'use client';

import React from 'react';

const BoltaButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'https://bolta.ai';
  };

  return (
    <button 
      className="button mt-8"
      onClick={handleClick}
    >
      Check out Bolta.ai instead
    </button>
  );
};

export default BoltaButton;
