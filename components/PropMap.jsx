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

  // Geocoding
  useEffect(() => {
    const getCords = async () => {
      const data = await fetchCords(property)
      const [lng, lat] = data.features[0].center
      setLng(lng)
      setLat(lat)
      setViewPort({
        ...viewPort,
        latitude: lat,
        longitude: lng,
      })
    }
    getCords()
    setLoading(false)
  }, [])

  return <div>MapBox</div>
}

export default PropMap
