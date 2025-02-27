import {
  createUser,
  getAllUser,
  deleteUser,
  changeName,
} from "$lib/server/userDB.js";

import { json } from "@sveltejs/kit";

export const GET = async () => {

  try {

    const users = getAllUser()
    
    return json(
      { users }, 
      { status: 200 }
    )

  } catch (error) {

    return json(
      { error: "Erro ao buscar usuarios" }, 
      { status: 500 }
    )

  }
}

export const POST = async ({ request }) => {

  const { name } = await request.json();

  try {  

    if (!name) {
      return json(
        { error: "Nome é obrigatório"},
        { status: 400}
      )

    }

    createUser(name);

    return json(
      { message: "Nome salvo com sucesso"},
      { status: 201 }
    )
 
  } catch (error) {

    return json(
      { error: "Erro no servidor"},
      { status: 500}
    )

  }
}

export async function PUT({ request }) {
  try {
    const { name, id } = await request.json();

    if (!id || !name) {
      new Response(JSON.stringify({ error: "ID e Nome é obrigatorio" }), {
        status: 400,
      });
    }

    const result = changeName(name, id);

    if (result.changes > 0) {
      return new Response(
        JSON.stringify({ message: "Nome atualizado com sucesso" }),
        { status: 200 }
      );
    } else {
      return new Response(JSON.stringify({ error: "Usuário não encontrado" }), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro interno no servidor" }), {
      status: 500,
    });
  }
}

export async function DELETE({ request }) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "ID é obrigatorio" }), {
        status: 400,
      });
    }

    const result = deleteUser(id);

    if (result.changes > 0) {
      return new Response(JSON.stringify({ message: "Usuário deletado" }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ message: "Usuário não encontrado" }),
        { status: 404 }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao deletar" }), {
      status: 500,
    });
  }
}

