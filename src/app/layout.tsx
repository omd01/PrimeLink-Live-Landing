import type { Metadata } from "next";
import { Outfit, Rajdhani } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "PrimeLink Exim | The Trade OS",
    template: "%s | PrimeLink Exim"
  },
  description: "The unified operating system for global trade. Bridging the gap between physical logistics and digital intelligence.",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico', // fallback
  },
  keywords: ["Global Trade", "Export Import", "Logistics", "Supply Chain", "Commodities", "Digital Trade"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://primelinkexim.com", // Placeholder or actual if known
    title: "PrimeLink Exim | The Trade OS",
    description: "The unified operating system for global trade.",
    siteName: "PrimeLink Exim",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${rajdhani.variable} font-sans antialiased bg-white text-neutral-900 selection:bg-brand-teal selection:text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
