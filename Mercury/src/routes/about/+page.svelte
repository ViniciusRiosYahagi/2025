<script>
  import About from "../../components/About.svelte";
  import Header from "../../components/Header.svelte";
</script>

<Header title="About"/>
<main>
  <About />
</main>

<style lang="scss">
  @import '../../styles/mixins';
  @import '../../styles/variables';

  main {
    @include flex(column, center, center, 15px); 
  }

</style>