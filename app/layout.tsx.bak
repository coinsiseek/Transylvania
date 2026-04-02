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
      <body 
        className={`${GeistMono.className} w-screen h-screen flex flex-col bg-obsidian-black text-poison-green`}
        style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}
      >
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <MissionProvider>
            {children}
          </MissionProvider>
        </div>
      </body>
    </html>
  );
}