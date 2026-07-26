import "./globals.css";

export const metadata = {
  title: "AI Agents Pro",
  description: "A curated collection of ready-to-use AI agent projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
