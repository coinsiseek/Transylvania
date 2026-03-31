import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { MissionProvider } from '@/contexts/MissionContext';

export const metadata: Metadata = {
  title: 'Transylvania: The Gateway',
  description: 'Reality-Agnostic Tourism - Immersive Medieval Chronicles',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* In the latest 'geist' version, GeistMono is a pre-configured
          object. We use it directly in the className.
      */}
      <body className={`${GeistMono.className} min-h-screen bg-obsidian-black text-gothic-cream`}>
        <MissionProvider>
          {children}
        </MissionProvider>
      </body>
    </html>
  );
}