import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'

export const metadata = {
  title: 'Digital Clock App',
  description: 'A simple time tracking and management app by Muhammad Umar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
