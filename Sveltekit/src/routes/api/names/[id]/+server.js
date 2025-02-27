import { getUserId } from "$lib/server/userDB.js"
import { json } from "@sveltejs/kit"

export const GET = async = ({ params }) => {
  const { id } = params

  try {
    const user = getUserId(id)

    if (!user) {
      return json({ error: "Usuário não encontrado"}, { status: 404 })
    }

    return json({ user }, { status: 200 })
  }
  catch (error) {
    return json({ error: "Erro interno no servidor"}, { status: 500 })
  }
}