import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Atomix Forge",
  description:
    "Get in touch with Atomix Forge to discuss your custom web application project. We'll help you choose the right technology stack for your needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
