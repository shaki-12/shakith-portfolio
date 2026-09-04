import type { Metadata } from "next";
import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: "%s - Shakith A",
    default: "Shakith A – Full Stack .NET Developer",
  },
  description: "Aspiring Full Stack .NET Developer specializing in C#, ASP.NET MVC, and Java. Based in Chennai, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ fontFamily: "'Readex Pro', system-ui, sans-serif" }}>
        <NuqsAdapter>
          <ThemeProvider attribute="class">
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
