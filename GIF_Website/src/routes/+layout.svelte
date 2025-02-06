<script>
  import Nav from "$lib/components/Nav.svelte";
  import '../index.scss'
</script>

<Nav />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>