<!-- Script -->
<script>
  import Player from "./Player.svelte";
</script>
<!-- HTML -->
<header>
  <h1>Harmony</h1>
  <img src="src/assets/img/harmony.gif" alt="hand with rose">
  <nav>
    <ul>
      <Player />
      <li><a href="/about" class="link">About</a></li>
      <li><a href="https://github.com/ViniciusRiosYahagi/2025/tree/main/Harmony" class="link" target="_blank">Github</a></li>
    </ul>
    <p>Playing now: 333 - Awaked</p>
  </nav>
</header>
<!-- Styles -->
<style lang="scss">
  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    h1 {
      font-size: 3rem;
    }
    
    img {
      height: auto;
    }

    nav {
      ul {
      list-style: none;
        li {
          display: inline-block;
          margin-left: 5px;
        a {
          border-bottom: 1px solid transparent;
          transition: 1s;
          &:hover {
          border-bottom: 1px solid;
          }
        }
      }
    }
  }

.link {
      text-decoration: none;
  }
}
</style>
