import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components-1/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Página de portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col min-h-screen bg-slate-500">
          <div className="w-full p-8 flex-grow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
