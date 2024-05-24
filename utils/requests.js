const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

const fetchProps = async () => {
  try {
    // handle domain not available
    if (!apiDomain) {
      return []
    }
    const response = await fetch(`${apiDomain}/properties`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export { fetchProps }
