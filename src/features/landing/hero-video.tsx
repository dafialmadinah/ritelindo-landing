"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
}

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => setPlaying(false));
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  }

  return (
    <>
      <video
        ref={videoRef}
        id="hero-video"
        aria-hidden="true"
        className="hero-image"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        className="hero-video-toggle"
        type="button"
        aria-controls="hero-video"
        onClick={togglePlayback}
      >
        {playing ? "Jeda video" : "Putar video"}
      </button>
    </>
  );
}
