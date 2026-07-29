import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "AI Agents Hub",
  description: "A comprehensive collection of 500+ AI agent projects and use cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-slate-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight sm:text-5xl mb-4">
              AI Agents Hub
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600">
              Ready-to-use and trending AI agents for your next project.
            </p>
          </header>
          <main>{children}</main>
          <footer className="mt-20 border-t border-slate-200 pt-8 text-center pb-8">
            <p className="text-slate-500">
              Built with Next.js • Sourced from ashishpatel26/500-AI-Agents-Projects
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
