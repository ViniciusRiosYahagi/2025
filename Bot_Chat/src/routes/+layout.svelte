<script>
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
import "../global.scss"
</script>


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