import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sites web, CRM et applications pour agences de voyage | Stallion Advertising",
  description: "Stallion Advertising développe des sites web, CRM et applications sur mesure pour les agences de voyage au Maroc : circuits, demandes de devis et dossiers voyageurs.",
  openGraph: { title: "Solutions digitales pour agences de voyage", description: "Sites web, CRM et applications sur mesure au Maroc par Stallion Advertising.", locale: "fr_MA", type: "website" },
  twitter: { card: "summary", title: "Stallion Advertising | Agences de voyage", description: "Sites web, CRM et applications pour votre agence de voyage au Maroc." },
  icons: { icon: "/unicorn.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
