import type { Metadata } from "next";
import { WhatsAppLanding } from "./WhatsAppLanding";

export const metadata: Metadata = {
  title: "WhatsApp — Pizza Bakana",
  description:
    "Fale conosco e faça seu pedido pelo WhatsApp com mensagem pronta.",
};

export default function WhatsAppPage() {
  return <WhatsAppLanding />;
}
