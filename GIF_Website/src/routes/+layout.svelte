<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../index.scss";
</script>

<Nav />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    display: grid;
    place-content: center;
    height: 100vh;
  }
</style>
