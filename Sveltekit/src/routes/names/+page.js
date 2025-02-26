export const load = async ({ fetch }) => {
  const response = await fetch('/api/names')
  const { users } = await response.json()
  
  return { users }
}