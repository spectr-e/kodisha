import { Featured, Hero, HomeProps, InfoBoxes } from '@/components'

export const dynamic = 'force-dynamic'

const HomePage = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- For Renters & Owners --> */}
      <InfoBoxes />
      {/* <!-- Featured Properties --> */}
      <Featured />
      {/* <!-- Random listed Properties --> */}
      <HomeProps />
    </>
  )
}

export default HomePage
