import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components-1/Header"
import Perfil from "./components-1/Perfil";
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
      <header>
        <Header/>
        </header>
        <main className="flex bg-slate-500">
          <div className="w-3/1 p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
