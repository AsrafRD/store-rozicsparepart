import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect } from "react";

const font = Urbanist({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Store',
//   description: 'Store - The place for all your purchases.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <ClerkProvider 
    appearance={{
      elements: {
        formButtonPrimary:
          "bg-orange-400 text-white hover:bg-orange-300 text-sm text-gray-100 normal-case",
      },
    }}
    >
      <html lang="en">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
