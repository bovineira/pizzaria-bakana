"use client";

import { LandingHero } from "@/components/LandingHero";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <LandingHero
      ctaLabel="ACESSAR O CARDÁPIO"
      ctaHref="https://app.cardapioweb.com/pizza_bakana"
      ctaIcon={Menu}
      ctaTarget="_blank"
      ctaRel="noopener noreferrer"
    />
  );
}
