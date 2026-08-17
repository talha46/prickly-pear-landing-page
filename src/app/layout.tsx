import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { GUIDE_PATH, SEO, SITE_URL } from "@/config/product";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: GUIDE_PATH,
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: `${SITE_URL}${GUIDE_PATH}`,
    siteName: "Prickly Pear Jelly Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SEO.ogImage,
        width: 1500,
        height: 1500,
        alt: "Cheri's Desert Harvest Prickly Pear Cactus Jelly jar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "prickly pear jelly",
    "prickly pear jam",
    "cactus jelly",
    "what is prickly pear",
    "what does prickly pear taste like",
    "how to use prickly pear jelly",
    "prickly pear recipes",
    "prickly pear glaze",
    "prickly pear cheesecake",
    "prickly pear gift",
    "Arizona prickly pear jelly",
    "Southwest food gifts",
    "prickly pear cocktails",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
