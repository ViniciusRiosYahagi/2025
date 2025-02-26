<script>
  let id = $state()

  const deletarUsuario = async () => {
    const response = await fetch("/api/names", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id})
    })

    const data = await response.json()
    console.log(data)
  }
</script>

<div>
  <label for="id">Id:</label>
  <input id="id" bind:value={id} type="number">
  <button onclick={deletarUsuario}>Deletar</button>
</div>