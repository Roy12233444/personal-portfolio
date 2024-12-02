import { Outfit } from "next/font/local";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit", 
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sourav's Portfolio",
  description: "Full-stack developer passionate about building innovative web applications with modern technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
