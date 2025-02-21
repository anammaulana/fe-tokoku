import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bg = `bg-gray-900 text-white dark:bg-black dark:text-gray-300`;

export const metadata = {
  title: "Development",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bg} antialiased`}
      >
         <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">

        {children}
       
         </div>
      </body>
    </html>
  );
}
