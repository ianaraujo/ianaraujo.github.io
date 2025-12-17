import "../styles/globals.css";
import type { Metadata } from "next";

import { DEFAULT_LOCALE } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: {
    template: "Ian Araujo | %s",
    default: "Ian Araujo",
  },
  description: "Cientista de Dados e IA",
  metadataBase: new URL("https://ianaraujo.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>{children}</body>
    </html>
  );
}
