<!-- Script -->
<script>
  import '../index.scss'
</script>
<!-- HTML -->
<main class="pages">
  <slot />
</main>
<!-- Main Styles -->
<style lang="scss">
  .pages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>