import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Threads Creator',
  description: 'Weekly highlights of your favorite Threads Creators... or maybe not.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 py-8">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
