import './globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Custom font example with Next.js',
}
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <head>{/* Preload font for better performance */}</head>
        <body>{children}</body>
      </html>
      <Footer />
    </>
  )
}
