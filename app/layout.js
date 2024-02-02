import { Poppins } from 'next/font/google';
import './globals.css';
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";
import Head from 'next/head';

export const metadata = {
  title: {
    template: '%s | Chill Academy where ideas get life',
    default: 'Chill Academy where ideas get life',
  },
  description: 'The official Chill Academy overview where we show you how we can make you more brighter by giving a life to your idea',
  metadataBase: new URL('https://chillacademy.com'),
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500','600', '700'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
      </head>
      <body className="min-h-screen mx-auto max-w-6xl flex flex-col bg-blue-100   dark:bg-gray-800">
       <main className={poppins.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
        </main>
      </body>
    </html>
  )
}
