import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "Auth.js Example",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex items-center justify-between p-4 bg-stone-900 text-white">
          <Link href="/" className="text-xl font-semibold">
            Auth.js Example
          </Link>
          <div>
            <Link href="/protected" className="mr-4">
              Protected
            </Link>
            <Link href="/sign-in">Sign In</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
