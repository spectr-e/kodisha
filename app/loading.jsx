'use client'
import { ClipLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '100px auto',
}

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
      size={160}
      cssOverride={override}
    />
  )
}

export default LoadingPage
