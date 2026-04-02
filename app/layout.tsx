import "./globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { MissionProvider } from "@/contexts/MissionContext";

export const metadata: Metadata = {
  title: "Transylvania: The Gateway",
  description: "Reality-Agnostic Tourism - Immersive Medieval Chronicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body 
        className={`${GeistMono.className} w-screen h-screen flex flex-col content-above-scanline bg-obsidian-black text-poison-green`}
        style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "auto" }}
      >
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
          <MissionProvider>
            {children}
          </MissionProvider>
        </div>
      </body>
    </html>
  );
}
