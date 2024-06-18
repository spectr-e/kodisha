const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// GET All properties
const fetchProps = async () => {
  try {
    // handle domain not available
    if (!apiDomain) {
      return []
    }
    const response = await fetch(`${apiDomain}/properties`, {
      cache: 'no-store',
      // Revalidate every 60 seconds
    })
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
      cache: 'no-store',
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

export { fetchProps, fetchProp }
