import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Kodisha | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords:
    'rental, find rentals, rent in kenya, properties in kenya, cheapest houses in kenya, luxury homes',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default MainLayout
