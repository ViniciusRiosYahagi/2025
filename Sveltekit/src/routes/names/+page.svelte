<script>
  export let data
</script>

<div>
  <ul>
    {#each data.users as user }
      <li>{user.name}</li>
    {/each}
  </ul>
</div>