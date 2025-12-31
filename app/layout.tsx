import type { Metadata } from "next";
import Link from "next/link";
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
  title: "World Insights — Politics, Economy, History",
  description:
    "Simple articles exploring world politics, the global economy, and modern history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
          <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="text-sm font-semibold tracking-tight">
                World Insights
              </Link>
              <nav className="flex gap-4 text-xs font-medium text-zinc-700">
                <Link href="/articles" className="hover:text-blue-600">
                  Articles
                </Link>
                <Link href="/politics" className="hover:text-blue-600">
                  Politics
                </Link>
                <Link href="/history" className="hover:text-blue-600">
                  History
                </Link>
                <Link href="/timelines" className="hover:text-blue-600">
                  Timelines
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-10 border-t border-zinc-200 bg-white/80">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} World Insights. For educational
                and informational purposes.
              </p>
              <div className="flex gap-4">
                <Link href="/sources" className="hover:text-blue-600">
                  Sources
                </Link>
                <Link href="/disclaimer" className="hover:text-blue-600">
                  Disclaimer
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
