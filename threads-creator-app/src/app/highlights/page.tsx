'use client';

import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

export default function HighlightsPage() {
  return (
    <main style={{ padding: '20px', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem' }}>This Week&apos;s Highlights</h1>
      <Highlights />
      <Footer />
    </main>
  );
}
