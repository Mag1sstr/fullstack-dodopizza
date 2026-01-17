import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProductModal from "@/components/modals/ProductModal";
import CartModal from "@/components/modals/CartModal";
import Providers from "@/providers/Providers";
import NextTopLoader from "nextjs-toploader";
import AuthModal from "@/components/modals/AuthModal";
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
  title: "NextPizza | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
        // suppressHydrationWarning
      >
        <Providers>
          <ToastContainer position="top-right" autoClose={3000} />
          <ProductModal />
          <CartModal />
          <AuthModal />
          <NextTopLoader color="#fe5f00" />
          <main className="flex-1 bg-white">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
