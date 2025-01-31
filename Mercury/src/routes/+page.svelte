<script>
  import Header from "../components/Header.svelte";
  import News from "../components/News.svelte";

</script>

<main>
  <Header title="News"/>
  <News />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>