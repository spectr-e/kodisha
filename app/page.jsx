import { Hero, HomeProps, InfoBoxes } from '@/components'

const HomePage = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- For Renters & Owners --> */}
      <InfoBoxes />
      {/* <!-- Random listed Properties --> */}
      <HomeProps />
    </>
  )
}

export default HomePage
