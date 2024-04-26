import { Cormorant_Garamond } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'
import './styles.css'

const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
})
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant_garamond.variable + libre_franklin.variable}>
        {children}
      </body>
    </html>
  )
}