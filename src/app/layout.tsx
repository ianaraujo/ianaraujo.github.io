import "@/styles/globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Araujo",
  description: "Personal website and projects",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
