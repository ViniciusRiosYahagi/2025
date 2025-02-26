<script>

  let name = $state()

  const cadastrarUsuario = async () => {
    const response = await fetch('/api/names', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    })
    const data = await response.json()
    console.log(data)
  }
</script>

<div>
  <label for="name">Nome:</label>
  <input id="name" bind:value={name} type="text">
  <button onclick={cadastrarUsuario}>Registrar</button>
</div>