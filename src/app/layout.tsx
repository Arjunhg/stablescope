import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StableScope - PYUSD Health Dashboard",
  description: "Real-time monitoring and analytics for PYUSD stablecoin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
