import '@/assets/styles/globals.css'
import { AuthProvider, Footer, NavBar } from '@/components'

export const metadata = {
  title: 'Kodisha | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords:
    'rental, find rentals, rent in kenya, properties in kenya, cheapest houses in kenya, luxury homes',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
