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
  title: "Miguel Ávila | Frontend Developer",
  description:
    "Portafolio de Miguel Ávila — Frontend Developer. Estudiante de Ingeniería de Sistemas en la Universidad Libre de Colombia. Especializado en React, Next.js, TypeScript y diseño moderno.",
  keywords: [
    "frontend",
    "developer",
    "react",
    "nextjs",
    "typescript",
    "portafolio",
    "miguel ávila",
    "colombia",
  ],
  authors: [{ name: "Miguel Ávila" }],
  openGraph: {
    title: "Miguel Ávila | Frontend Developer",
    description:
      "Portafolio de Miguel Ávila — Frontend Developer. Interfaces modernas, diseño visual y tecnología frontend de alto nivel.",
    type: "website",
    locale: "es_CO",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#050505] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
