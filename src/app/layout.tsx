import '../styles/globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Ian Araujo',
    default: 'Ian Araujo',
  },
  description: "Personal website and projects",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
