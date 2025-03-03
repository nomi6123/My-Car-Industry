import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Import Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata = {
  title: "My Car Industry",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-7225725941807740"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header component */}
        <Header />
        
        {/* Children (main content) */}
        {children}
        
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
