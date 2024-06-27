const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// GET All properties
const fetchProps = async (page = 1, limit = 3) => {
  try {
    // handle domain not available
    if (!apiDomain) {
      return []
    }
    const response = await fetch(
      `${apiDomain}/properties?page=${page}&limit=${limit}`,
      {
        next: { revalidate: 60 },
        // Revalidate every 60 seconds
      }
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

// GET Single Property
const fetchProp = async (id) => {
  try {
    // handle domain not available
    if (!apiDomain) {
      return null
    }
    const response = await fetch(`${apiDomain}/properties/${id}`, {
      next: { revalidate: 60 },
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

// GET coordinates for mapbox
const fetchCords = async (property) => {
  const apiKey = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const address = encodeURIComponent(
    `${property.location.street}, ${property.location.city}, ${property.location.state}, ${property.location.zip}`
  )

  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=${apiKey}`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}

export { fetchProps, fetchProp, fetchCords }
