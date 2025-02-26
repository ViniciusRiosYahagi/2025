<script>
  let name = $state()
  let id = $state()

  const atualizarUsuario = async () => {
    const response = await fetch("/api/names", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, id})
    })

    const data = await response.json()
    console.log(data)
  }
</script>

<div>
  <label for="name">Nome:</label>
  <input id="name" bind:value={name} type="text">
  <input id="Id" bind:value={id} type="number">
  <button onclick={atualizarUsuario}>Registrar</button>
</div>