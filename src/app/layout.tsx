import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/siteHeader/siteHeader";
import { CategoryProvider } from "@/helpers/categoryContext";
import { FavoriteProvider } from "@/helpers/favoriteContext";

export const metadata: Metadata = {
  title: "Proassist",
  description: "recruitment task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <CategoryProvider>
          <FavoriteProvider>
            <SiteHeader />
            {children}
          </FavoriteProvider>
        </CategoryProvider>
      </body>
    </html>
  );
}
