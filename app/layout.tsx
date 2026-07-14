import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Daniele Campos | Consultório Odontológico em Manaus",
  description: "Cuidando do seu sorriso com carinho e excelência. Atendimento humanizado, tecnologia moderna e tratamentos odontológicos completos em Manaus. Agende sua consulta!",
  keywords: [
    "dentista manaus",
    "odontologia manaus",
    "consultório odontológico manaus",
    "dra daniele campos",
    "clareamento dental manaus",
    "implante dental manaus",
    "aparelho ortodôntico manaus",
    "odontopediatria manaus",
    "limpeza dental manaus",
    "facetas manaus"
  ],
  authors: [{ name: "Dra. Daniele Campos" }],
  creator: "Dra. Daniele Campos",
  publisher: "Dra. Daniele Campos",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://dradanielecampos.com.br",
  },
  openGraph: {
    title: "Dra. Daniele Campos | Consultório Odontológico em Manaus",
    description: "Cuidando do seu sorriso com carinho e excelência. Atendimento humanizado, tecnologia moderna e tratamentos odontológicos completos em Manaus.",
    url: "https://dradanielecampos.com.br",
    siteName: "Consultório Odontológico Dra. Daniele Campos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://dradanielecampos.com.br/images/hero_dentist.jpg",
        width: 1200,
        height: 800,
        alt: "Consultório Odontológico Dra. Daniele Campos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Daniele Campos | Consultório Odontológico em Manaus",
    description: "Atendimento humanizado, tecnologia moderna e tratamentos odontológicos completos em Manaus.",
    images: ["https://dradanielecampos.com.br/images/hero_dentist.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Consultório Odontológico Dra. Daniele Campos",
    "image": "https://dradanielecampos.com.br/images/hero_dentist.jpg",
    "@id": "https://dradanielecampos.com.br/#dentist",
    "url": "https://dradanielecampos.com.br",
    "telephone": "+5592984943657",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Timbiras, 32C",
      "addressLocality": "Manaus",
      "addressRegion": "AM",
      "postalCode": "69090-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.029812,
      "longitude": -60.007625
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dradanielecampos.odonto"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-brand-navy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
