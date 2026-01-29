import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gelbe Seiten | Das richtige Unternehmen finden",
  description: "Gelbe Seiten - Das Branchenbuch für Deutschland gibt Auskunft zu Telefonnummern, Adressen, Faxnummern und Firmen-Infos",
  keywords: ["Gelbe Seiten", "Branchenbuch", "Telefon", "Adressen", "Unternehmen Deutschland"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-thesans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
