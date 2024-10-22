import React from 'react';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

const HighlightsPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>This Week&apos;s Highlights</h1>
      <Highlights />
      <Footer />
    </div>
  );
};

export default HighlightsPage;
