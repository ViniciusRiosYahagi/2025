<script>
  export let data
</script>

<div>
  <ul>
    {#each data.users as user }
      <li>Nome: {user.name} || ID: {user.id}</li>
    {/each}
  </ul>
</div>