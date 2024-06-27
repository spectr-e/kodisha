import { Poppins } from 'next/font/google'

export const poppinsInit = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const poppins = poppinsInit.variable
