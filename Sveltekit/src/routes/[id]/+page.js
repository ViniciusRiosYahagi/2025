export const load = async ({ params, fetch }) => {
  const id = params.id

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await response.json()

  return { user }
}