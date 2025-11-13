import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header/Header'
// Load the font
const poppins = Poppins({
  subsets: ['Fancy'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js application with a custom layout.',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </>
  )
}
