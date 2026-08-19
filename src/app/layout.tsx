import type { Metadata } from "next";
import { Lato, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import favicon16 from "@/assets/icons/favicon-16x16.png";
import favicon32 from "@/assets/icons/favicon-32x32.png";
import favicon48 from "@/assets/icons/favicon-48x48.png";
import appleTouchIcon from "@/assets/icons/apple-touch-icon.png";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Madhuvan Greens | Family Restaurant in Badlapur",
    template: "%s | Madhuvan Greens",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Madhuvan Greens",
    "family restaurant Badlapur",
    "restaurant in Badlapur",
    "veg restaurant Badlapur",
    "non veg restaurant Badlapur",
    "Indian restaurant Badlapur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Madhuvan Greens | Family Restaurant in Badlapur",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Madhuvan Greens family restaurant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhuvan Greens | Family Restaurant in Badlapur",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: favicon16.src, sizes: "16x16", type: "image/png" },
      { url: favicon32.src, sizes: "32x32", type: "image/png" },
      { url: favicon48.src, sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: appleTouchIcon.src, sizes: "180x180", type: "image/png" }],
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${outfit.variable} antialiased`}>
        {children}
        
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
