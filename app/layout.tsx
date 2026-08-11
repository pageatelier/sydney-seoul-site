import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sydneyseoul.com"),
  title: "Sydney Seoul | Contemporary Dining in Cheongdam",
  description:
    "Sydney Seoul is a contemporary dining restaurant in Cheongdam, Seoul, bringing Australian ingredients and Korean sensibility to one table.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Sydney Seoul",
    description: "Seasonal tasting menus from owner-chef Minhoo Kim in Cheongdam, Seoul.",
    images: ["/images/og-share.webp"],
    type: "website",
    siteName: "Sydney Seoul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Seoul",
    description: "Seasonal tasting menus from owner-chef Minhoo Kim in Cheongdam, Seoul.",
    images: ["/images/og-share.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
