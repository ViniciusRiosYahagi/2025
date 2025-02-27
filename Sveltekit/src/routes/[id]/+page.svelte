<script>
  export let data
  const { user } = data
</script>

<div>
  <h1>Detalhes do Usuário</h1>
  {#if user}
    <p>ID: {user.id}</p>
    <p>Nome: {user.name}</p>
    <p>Email: {user.email}</p>
  {:else}
    <p>Carregando...</p>
  {/if}
</div>