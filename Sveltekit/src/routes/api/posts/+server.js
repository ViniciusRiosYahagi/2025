export const GET = async ({ request }) => {
  const authHeader = request.headers.get("Authorization")

  try {
    if (authHeader !== "123") {
      return new Response(JSON.stringify({ message: "Acesso Negado!" }), { status: 401 })
    }

    return new Response(JSON.stringify({ message: "Acesso permitido!" }), { status: 201 })
  } 

  catch(error) {
    return new Response(JSON.stringify({ error: "Erro no servidor" }), { status: 500 })
  }
}