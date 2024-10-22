'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import InfoAlert from './components/InfoAlert';
const RickRollVideo = dynamic(() => import('./components/RickRollVideo'), { ssr: false });
const BoltaButton = dynamic(() => import('./components/BoltaButton'), { ssr: false });

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl mb-4">Welcome to Threads Creator</h1>
      <p className="mb-8">Weekly highlights of your favorite Threads Creators... or maybe not.</p>

       <RickRollVideo /> 
       <BoltaButton />
       <InfoAlert />
      <Highlights />
      <Footer />
    </div>
  );
}
