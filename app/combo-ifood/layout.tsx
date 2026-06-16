import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Exclusivo no iFood — Pizza Bakana",
  description:
    "Garanta o combo exclusivo da Pizza Bakana no iFood — Lauro de Freitas, Vilas do Atlântico.",
};

export default function ComboIfoodLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
