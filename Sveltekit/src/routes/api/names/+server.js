import db from '$lib/server/database.js'
import { createUser, getAllUser, deleteUser } from '$lib/server/userDB.js'
import { error } from '@sveltejs/kit'

export const GET = async () => {
  try {
    const users = getAllUser()
    return new Response(JSON.stringify({users}), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify({error: "Erro ao buscar usuarios"}), {status: 500})
  }
}

export const POST = async ({request}) => {

  try {
    const {name} = await request.json()

    if(!name) {
      return new Response(JSON.stringify({error: "Nome é obrigatório"}), {status: 400})
    }

    createUser(name)
    return new Response(JSON.stringify({message: "Nome salvo com sucesso"}), {status: 201})
  }
  
  catch (error) {
    return new Response(JSON.stringify({error: "Erro ao salvar nome"}), {status: 500})
  }
} 

export const DELETE = async ({request}) => {
  try {
    const {id} = request.json()

    if(!id) {
      return new Response(JSON.stringify({error: "ID É obrigatorio"}), {status: 400})
    }

    const result = deleteUser(id)
    
    if(result.changes === 0) {
      return new Response()
    }
  }

}


