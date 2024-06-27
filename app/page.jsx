import { Featured, Hero, HomeProps, InfoBoxes } from '@/components'

export const dynamic = 'force-dynamic'

const HomePage = () => {
  return (
    <main className='font-poppins'>
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- For Renters & Owners --> */}
      <InfoBoxes />
      {/* <!-- Featured Properties --> */}
      <Featured />
      {/* <!-- Random listed Properties --> */}
      <HomeProps />
    </main>
  )
}

export default HomePage
