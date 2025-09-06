import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Geofrey Mokami Kegocha — AI/Software Engineer | Portfolio & Services",
    template: "%s — Geofrey Mokami Kegocha",
  },
  description:
    "AI/Software Engineer and entrepreneur. Portfolio, services, blog, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Geofrey Mokami Kegocha — AI/Software Engineer",
    description:
      "Portfolio and business hub: AI/ML, fullstack, consulting, and startup advisory.",
    url: "https://example.com",
    siteName: "Geofrey Mokami Kegocha",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "AME" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geofrey Mokami Kegocha — AI/Software Engineer",
    description:
      "Portfolio and business hub: AI/ML, fullstack, consulting, and startup advisory.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics placeholder */}
        {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
        </Script> */}
        <ThemeProvider>
          <Navbar />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
