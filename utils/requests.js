const fetchProps = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export { fetchProps }
