export const GET = async (request) => {
  try {
    return new Response('Hello Next', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}
