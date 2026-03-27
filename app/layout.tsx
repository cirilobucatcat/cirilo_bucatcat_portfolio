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
        className={`${openSans.variable} ${robotoMono.variable} bg-[url(/noisebg.png)] bg-repeat bg-nero antialiased overflow-x-hidden relative`}
      >
        {children}
        <footer className="bg-brand-gradient mt-12 text-center py-2">
          <p className="text-sm">developed using next.js by meee :D &copy; 2026 Cirilo Bucatcat Jr.</p>
        </footer>
      </body>
    </html>
  );
}
