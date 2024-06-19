'use client'
import { useEffect, useState } from 'react'
import { Map, Marker } from 'react-map-gl'
import { Spinner } from '.'
import { pin } from '@/assets/images'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'
import { fetchCords } from '@/utils/requests'

const PropMap = ({ property }) => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [viewPort, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: '100%',
    height: '500px',
  })
  const [loading, setLoading] = useState(true)

  // Handling erroneous addresses
  const [geocodeErr, setGeocodeErr] = useState(false)

  // Geocoding
  useEffect(() => {
    const getCords = async () => {
      try {
        const data = await fetchCords(property)

        // check for results
        if (!data && data.length === 0) {
          // no valid address
          setGeocodeErr(true)
          setLoading(false)
          return
        }

        const [lng, lat] = data.features[0].center
        setLng(lng)
        setLat(lat)
        setViewPort({
          ...viewPort,
          latitude: lat,
          longitude: lng,
        })
      } catch (error) {
        console.log(error)
        setGeocodeErr(true)
        setLoading(false)
      }
    }
    getCords()
  }, [])

  if (loading) <Spinner loading={loading} />

  // where geocoding fails
  if (geocodeErr) {
    return (
      <div className='text-xl font-bold text-center'> No Location Data</div>
    )
  }

  return (
    !loading && (
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapLib={import('mapbox-gl')}
        {...viewPort}
        style={{ width: '100%', height: 500 }}
        mapStyle='mapbox://styles/mapbox/streets-v12'
      >
        <Marker latitude={lat} longitude={lng} anchor='bottom'>
          <Image
            src={pin}
            width={40}
            height={40}
            alt='location'
            priority={true}
          />
        </Marker>
      </Map>
    )
  )
}

export default PropMap
