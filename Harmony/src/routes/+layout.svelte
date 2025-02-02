<script>
  import Header from '../components/Header.svelte';
  import '../index.scss'
</script>

<Header />
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