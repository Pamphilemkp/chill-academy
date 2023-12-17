import { Poppins } from 'next/font/google';
import './globals.css';
import Provider from "@/components/Provider";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500','600', '700'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen mx-auto max-w-6xl flex flex-col bg-white   dark:bg-gray-800">
       <main className={poppins.className}>
        <Provider>
          {children}
        </Provider>
        </main>
      </body>
    </html>
  )
}
