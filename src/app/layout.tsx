import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Ian Vaz Araujo | %s",
    default: "Ian Vaz Araujo",
  },
  description: "Cientista de Dados e IA",
  metadataBase: new URL('https://ianaraujo.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
