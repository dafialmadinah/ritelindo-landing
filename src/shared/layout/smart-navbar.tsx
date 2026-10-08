"use client";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { navigation } from "@/shared/config/navigation";
import { Wordmark } from "@/shared/ui/wordmark";
interface SmartNavbarProps {
  desktopCta: ReactNode;
  mobileCta: ReactNode;
}
export function SmartNavbar({ desktopCta, mobileCta }: SmartNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let last = window.scrollY;
    let direction = 0;
    let distance = 0;
    let frame = 0;
    const update = () => {
      const current = Math.max(0, window.scrollY);
      const delta = current - last;
      setSolid(current > 2);
      if (current <= 2) {
        setHidden(false);
        direction = 0;
        distance = 0;
      } else if (delta !== 0) {
        const nextDirection = Math.sign(delta);
        distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
        direction = nextDirection;
        // Accumulate small scroll movements, but ignore touchpad jitter.
        if (distance >= 6) {
          setHidden(direction > 0);
          distance = 0;
        }
      }
      last = current;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (media.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [menuOpen]);
  return (
    <header
      className={`site-header ${solid || menuOpen ? "site-header--solid" : "site-header--top"} ${hidden && !menuOpen ? "site-header--hidden" : ""}`}
    >
      <Wordmark />
      <nav aria-label="Navigasi utama" className="desktop-nav">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      {desktopCta}
      <button
        ref={toggle}
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d={menuOpen ? "m5 5 14 14M19 5 5 19" : "M4 7h16M4 12h16M4 17h16"}
          />
        </svg>
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Navigasi mobile"
        className="mobile-nav"
        hidden={!menuOpen}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
        }}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        {mobileCta}
      </nav>
    </header>
  );
}
