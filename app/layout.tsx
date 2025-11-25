import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KanYini Earth Projects | One Earth. Many Voices. One Shared Future.",
  description: "A not-for-profit educational and service-driven movement inspiring sustainable human co-habitation on planet Earth through media and social entrepreneurship.",
  keywords: ["sustainability", "education", "social impact", "environmental", "community"],
  authors: [{ name: "KanYini Earth Projects" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "KanYini Earth Projects",
    description: "One Earth. Many Voices. One Shared Future.",
    type: "website",
    locale: "en_US",
    siteName: "KanYini Earth Projects",
    images: ['/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
