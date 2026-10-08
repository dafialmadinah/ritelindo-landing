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
    const mobileViewport = window.matchMedia("(max-width: 620px)");
    const syncPlayback = () => {
      if (mobileViewport.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        setPlaying(false);
        return;
      }

      if (!video.hasAttribute("src")) {
        video.src = video.dataset.src ?? src;
        video.load();
      }

      if (preference.matches) {
        video.pause();
        setPlaying(false);
      } else {
        void video.play().catch(() => setPlaying(false));
      }
    };
    syncPlayback();
    preference.addEventListener("change", syncPlayback);
    mobileViewport.addEventListener("change", syncPlayback);
    return () => {
      preference.removeEventListener("change", syncPlayback);
      mobileViewport.removeEventListener("change", syncPlayback);
    };
  }, [src]);

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
        data-src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
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
