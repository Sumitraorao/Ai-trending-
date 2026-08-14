import "./globals.css";

export const metadata = {
  title: "AI Agents Directory",
  description: "A directory of 500+ AI Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
