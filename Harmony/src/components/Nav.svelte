<script>
  const navItem = $state([
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Github', path: 'https://github.com/ViniciusRiosYahagi/2025/tree/main/Harmony'}
  ])
</script>

<header>
  <h1>Harmony</h1>
  <nav>
    <ul>
      {#each navItem as {name, path}, i (i + 1)}
        <li>
          <a href={path}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    nav {

      h1 {
        font-size: 3rem;

      }

      ul {
        list-style: none;
        
        li {
          display: inline-block;
          margin: 0.2rem;
          
          a {
            text-decoration: none;

          }
        }
      }
    }
  }
</style>
