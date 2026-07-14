import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/content/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PaintLink | House Painters West & Central Auckland",
    template: "%s | PaintLink",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/gallery/st-marys-bay-villa.jpg",
        width: 1600,
        height: 1200,
        alt: "Freshly painted two-storey villa in St Marys Bay by PaintLink",
      },
    ],
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
