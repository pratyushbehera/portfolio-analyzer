import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Zerodha AI Portfolio Analyzer",
  description: "AI-powered analysis of your Zerodha portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
