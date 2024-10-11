import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Ian Araujo | %s",
    default: "Ian Araujo",
  },
  metadataBase: new URL('https://ianaraujo.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
