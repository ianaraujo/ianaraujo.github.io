import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ian Vaz Araujo",
  alternates: { canonical: "https://ianaraujo.com/pt" },
};

export default function RootPage() {
  return <><meta httpEquiv="refresh" content="0;url=/pt" /><a href="/pt">Português</a> · <a href="/en">English</a></>;
}
