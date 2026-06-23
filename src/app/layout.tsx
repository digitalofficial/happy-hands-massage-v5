import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Hands Massage | Therapeutic Massage - Tucson, AZ",
  description:
    "Professional massage therapy in Tucson. Swedish, deep tissue, hot stone, sports, prenatal, couples, reflexology, and aromatherapy services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>
        {children}
      </body>
    </html>
  );
}
