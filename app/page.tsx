"use client";

import { LandingHero } from "@/components/LandingHero";
import { Menu } from "lucide-react";
import { useCallback } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Home() {
  const handleCtaClick = useCallback(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Subscribe");
    }
  }, []);

  return (
    <LandingHero
      ctaLabel="ACESSAR O CARDÁPIO"
      ctaHref="https://app.cardapioweb.com/pizza_bakana"
      ctaIcon={Menu}
      onCtaClick={handleCtaClick}
      ctaTarget="_blank"
      ctaRel="noopener noreferrer"
    />
  );
}
