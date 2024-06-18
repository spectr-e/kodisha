'use client'
import { useEffect, useState } from 'react'
import { Map, Marker } from 'react-map-gl'
import { Spinner } from '.'
import { pin } from '@/assets/images'
import Image from 'next/image'
import geocoder from 'geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'

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

  return <div></div>
}

export default PropMap
