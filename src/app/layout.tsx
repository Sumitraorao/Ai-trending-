import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "500 AI Agents - Web UI",
  description: "A curated list of AI agents ready to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200 py-4 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600">500+ AI Agents</h1>
              <nav>
                <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  GitHub Repository
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-500">
            <p>Curated AI Agents Database. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
