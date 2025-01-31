<script>
  import Header from "../components/Header.svelte";
  import News from "../components/News.svelte";

</script>

<Header title="News"/>
<main>
  <News />
</main>

<style lang="scss">
  @import "../styles/mixins";

  main {
    @include flex(column, center, center, 0);
  }
</style>