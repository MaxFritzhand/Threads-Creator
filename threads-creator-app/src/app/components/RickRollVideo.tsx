'use client';

import React, { useRef, useState } from 'react';

const RickRollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !videoRef.current.muted;
  //     setIsMuted(!isMuted);
  //   }
  // };

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="w-full max-w-2xl aspect-video relative">
        <video
          ref={videoRef}
          src="https://boltathread.com/wp-content/uploads/2024/10/rickbolta.mov"
          loop
          playsInline
          muted={false}
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl"
          >
            ▶️
          </button>
        )}
      </div>
      {/* <div className="mt-4 flex space-x-4">
        <button onClick={togglePlay} className="px-4 py-2 bg-blue-500 text-white rounded">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleMute} className="px-4 py-2 bg-blue-500 text-white rounded">
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
      <p className="mt-4 text-center">
        <strong>Did you just get Rick Rolled?</strong> Let me know your thoughts below!
      </p> */}
    </div>
  );
};

export default RickRollVideo;
