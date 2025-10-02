import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js E-Commerce App & Admin Dashboard | React + Tailwind",
  description:
    "Modern Next.js 15 E-commerce app with shopping cart, product filters, checkout, and admin dashboard. Built with React, Tailwind CSS, TypeScript, Zustand, and ShadCN UI.",
  keywords: [
    "Next.js E-commerce",
    "React E-commerce App",
    "Tailwind E-commerce",
    "Next.js Admin Dashboard",
    "React Admin Panel",
    "Shopping Cart with Zustand",
    "Next.js 15 Template",
    "E-commerce Product Filters",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />

          {children}

          <Footer />
        </div>

        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}

/* import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js E-Commerce App & Admin Dashboard | React + Tailwind",
  description:
    "Modern Next.js 15 E-commerce app with shopping cart, product filters, checkout, and admin dashboard. Built with React, Tailwind CSS, TypeScript, Zustand, and ShadCN UI.",
  keywords: [
    "Next.js E-commerce",
    "React E-commerce App",
    "Tailwind E-commerce",
    "Next.js Admin Dashboard",
    "React Admin Panel",
    "Shopping Cart with Zustand",
    "Next.js 15 Template",
    "E-commerce Product Filters",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Next.js E-Commerce App & Admin Dashboard",
    description:
      "Full-featured Next.js 15 E-commerce app with responsive design, shopping cart, checkout, and admin dashboard.",
    url: "https://yourdomain.com",
    siteName: "Next.js E-Commerce App",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js E-Commerce App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js E-Commerce App & Admin Dashboard",
    description:
      "Responsive Next.js 15 E-commerce app with shopping cart, checkout, and admin dashboard built with React, Tailwind CSS, and TypeScript.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@your_twitter",
  },
  metadataBase: new URL("https://yourdomain.com"),
};
*/
