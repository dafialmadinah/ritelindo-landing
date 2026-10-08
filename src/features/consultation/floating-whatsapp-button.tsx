"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FloatingWhatsAppButtonProps {
  children: ReactNode;
  heroId: string;
}

/** The anchor is a server-rendered slot; only scroll visibility needs JavaScript. */
export function FloatingWhatsAppButton({
  children,
  heroId,
}: FloatingWhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    if (typeof window.IntersectionObserver === "function") {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
        );
      });
      observer.observe(hero);
      return () => observer.disconnect();
    }

    // Fallback for browsers without IntersectionObserver.
    let frame = 0;
    const update = () => {
      setVisible(hero.getBoundingClientRect().bottom <= 0);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [heroId]);

  return (
    <aside
      aria-label="Bantuan WhatsApp"
      className="floating-whatsapp"
      data-visible={visible}
      inert={!visible}
      aria-hidden={!visible}
    >
      {children}
    </aside>
  );
}
