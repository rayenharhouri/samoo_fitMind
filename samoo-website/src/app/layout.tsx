import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samoo Oussema - Champion, Coach & Entrepreneur | Dima Sport Podcast",
  description: "Découvrez Samoo Oussema, ancien champion de karaté, coach sportif certifié et créateur du Dima Sport Podcast. Expert en Hyrox, nutrition sportive et co-fondateur de FitMind AI - l'IA fitness 100% tunisienne.",
  keywords: "Samoo Oussema, Dima Sport Podcast, coach sportif Tunisie, FitMind AI, podcast motivation sport, Hyrox Tunisie, nutrition sportive, self défense Tunisie, karaté champion, MMA Tunisie",
  authors: [{ name: "Samoo Oussema" }],
  creator: "Samoo Oussema",
  publisher: "Dima Sport",
  openGraph: {
    title: "Samoo Oussema - Du sport, du mental, du réel",
    description: "Champion, Coach, Entrepreneur. Découvrez le parcours exceptionnel de Samoo Oussema et son podcast Dima Sport.",
    url: "https://samoo-oussema.tn",
    siteName: "Samoo Oussema Official",
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samoo Oussema - Champion & Coach Sportif",
    description: "Du sport, du mental, du réel avec Samoo Oussema",
    creator: "@samoo_oussema",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
