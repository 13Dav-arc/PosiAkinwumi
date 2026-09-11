import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olamiposi David Akinwumi — Frontend Engineer & System Architect",
  description:
    "Crafting fast, accessible, and thoughtfully architected web applications with fluid interactions and dependable foundations.",
  authors: [{ name: "Olamiposi David Akinwumi" }],
  keywords: [
    "Frontend Engineer",
    "Web Architect",
    "TypeScript",
    "React",
    "Next.js",
    "WCAG 2.2 AA",
    "Accessibility",
    "Olamiposi Akinwumi",
  ],
  openGraph: {
    title: "Olamiposi David Akinwumi — Frontend Engineer & System Architect",
    description:
      "Crafting fast, accessible, and thoughtfully architected web applications with fluid interactions and dependable foundations.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-accent-fg min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
