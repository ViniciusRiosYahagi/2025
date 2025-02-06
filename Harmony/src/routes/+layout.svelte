<script>
  import Nav from '../components/Nav.svelte';
  import '../index.scss'
</script>

<Nav />
<main class="pages">
  <slot />
</main>

<style lang="scss">
  .pages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>