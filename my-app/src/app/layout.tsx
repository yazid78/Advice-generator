import type { Metadata } from "next";
import "./globals.css";

// ca définit les meta données globales pour le site et c'est utile pour le SEO
export const metadata: Metadata = {
  title: "Advice generator",
  description: "Advice generator enerated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" bg-background flex justify-center min-h-screen items-center">
        {children}
      </body>
    </html >
  );
}
