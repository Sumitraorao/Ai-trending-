import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agents Hub",
  description: "A curated collection of 500+ AI agent projects and use cases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-blue-900">
        {children}
      </body>
    </html>
  );
}
