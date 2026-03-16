import { Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${openSans.variable} ${robotoMono.variable} bg-[url(/noisebg.png)] bg-repeat overflow-x-hidden bg-nero px-75 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
