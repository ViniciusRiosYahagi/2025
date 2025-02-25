export const load = async ({ fetch }) => {
  const response = await fetch('/api/names')

  if(!response.ok) {
    throw new Error("Erro ao buscar usuarios")
  }
  
  const { users } = await response.json()
  return { users }
}