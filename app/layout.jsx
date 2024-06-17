import '@/assets/styles/globals.css'
import { AuthProvider, Footer, NavBar } from '@/components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
          <ToastContainer
            position='bottom-right'
            autoClose={1900}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme='light'
            transition='slide'
          />
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
