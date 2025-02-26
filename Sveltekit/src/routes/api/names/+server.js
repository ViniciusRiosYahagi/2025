import {
  createUser,
  getAllUser,
  deleteUser,
  changeName,
} from "$lib/server/userDB.js";

export async function GET() {
  try {
    const users = getAllUser()
    return new Response(JSON.stringify({ users }), {
      status: 200,
      headers: { "Content-Type": "application/json"}
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao buscar usuarios" }), {
      status: 500,
    });
  }
}

export async function POST({ request }) {
  try {
    const { name } = await request.json();
    // Verifica se a requisição nome esta vazio.
    if (!name) {
      return new Response(JSON.stringify({ error: "Nome é obrigatório" }), {
        status: 400,
      });
    }
    // Adiciona o nome ao banco de dados.
    createUser(name);
    return new Response(JSON.stringify({ message: "Nome salvo com sucesso" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao salvar nome" }), {
      status: 500,
    });
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

