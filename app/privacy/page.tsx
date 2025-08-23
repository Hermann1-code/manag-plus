import PrivacyPolicyPage from "@/components/policy";
import React from "react";

export const metadata = {
  title: "Manag+ - Politique de confidentialite",
  description: "Manag+ - Politique de confidentialite",
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
    title: "Manag+ - Politique de confidentialite",
    description: "Manag+ - Politique de confidentialite",
    type: "website",
    locale: "fr_FR",
    siteName: "Manag+",
    images: [
      {
        url: "https://managplus.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manag+ - Politique de confidentialite",
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
    title: "Manag+ - Politique de confidentialite",
    description: "Manag+ - Politique de confidentialite",
    card: "summary_large_image",
    images: [
      {
        url: "https://managplus.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manag+ - Politique de confidentialite",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function page() {
  return <PrivacyPolicyPage />;
}
