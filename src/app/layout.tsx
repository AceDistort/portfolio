import type {Metadata} from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Antonin DAVID",
  description: "Portfolio de Antonin DAVID",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body>{children}</body>
      </html>
  );
}
