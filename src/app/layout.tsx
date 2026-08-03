import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Web3 Explorer — Learn blockchain like an artist',
  description:
    'Explore Web3 protocols interactively. Learn Bitcoin, Ethereum, Solana, Polygon, Arbitrum and more through beautiful, detailed 3D models.',
  keywords: 'blockchain, web3, crypto, protocol, ethereum, bitcoin, education',
  openGraph: {
    title: 'Web3 Explorer — Learn blockchain like an artist',
    description: 'Learn blockchain through immersive, interactive 3D protocol models.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
