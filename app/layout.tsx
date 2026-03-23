import { Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Ellipse from "@/components/shared/ellipse";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${robotoMono.variable} bg-[url(/noisebg.png)] bg-repeat bg-nero px-6 lg:px-75 antialiased overflow-x-hidden relative`}
      >
        {children}
      </body>
    </html>
  );
}
