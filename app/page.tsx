import ManagPlusLanding from "@/components/welcome-page";
import React from "react";

export const metadata = {
  title: "Manag+ - Gerer votre etablissement sans stress",
  description: "Manag+ - Gerer votre etablissement sans stress",
  keywords: [
    "Manag+",
    "Gestion d'etablissement",
    "Restaurant",
    "Bar",
    "Maquis",
    "Luange",
    "Gestion de stock",
    "stock",
  ],
  openGraph: {
    title: "Manag+ - Gerer votre etablissement sans stress",
    description: "Manag+ - Gerer votre etablissement sans stress",
    type: "website",
    locale: "fr_FR",
    siteName: "Manag+",
    images: [
      {
        url: "https://managplus.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manag+ - Gerer votre etablissement sans stress",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Manag+ - Gerer votre etablissement sans stress",
    description: "Manag+ - Gerer votre etablissement sans stress",
    card: "summary_large_image",
    images: [
      {
        url: "https://managplus.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manag+ - Gerer votre etablissement sans stress",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function page() {
  return <ManagPlusLanding />;
}
