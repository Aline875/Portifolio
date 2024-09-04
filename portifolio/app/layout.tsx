import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components-1/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Página de portfólio",
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
        <main
          className="flex flex-col min-h-screen"
          style={{
            backgroundImage: "url('https://stsci-opo.org/STScI-01HZ7H7Y40P63MQBGY02YST6A6.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/* Gradiente sobre a imagem de fundo */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="w-full p-8 flex-grow relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
