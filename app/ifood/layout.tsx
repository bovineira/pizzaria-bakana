import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedir no iFood — Pizza Bakana",
  description:
    "Peça a Pizza Bakana no iFood — Lauro de Freitas, Vilas do Atlântico.",
};

export default function IfoodLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
