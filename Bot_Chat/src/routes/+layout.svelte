<script>
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
import "../global.scss"
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  main {
    display: grid;
    place-content: center;
    height: 100vh;
  }
</style>