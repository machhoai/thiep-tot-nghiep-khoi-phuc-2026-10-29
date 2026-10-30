import type { Metadata } from "next";
import { Dancing_Script, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const dancingScript = Dancing_Script({
  subsets: ["vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: "Thiệp mời Lễ Tốt Nghiệp | Mạch Lâm Quốc Hoài",
  description:
    "Trân trọng kính mời bạn đến chung vui trong ngày lễ tốt nghiệp của Mạch Lâm Quốc Hoài.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Graduation Invitation",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${dancingScript.variable} ${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
