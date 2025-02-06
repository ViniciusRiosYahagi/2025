<script>
  const navItem = $state([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Github",
      path: "https://github.com/ViniciusRiosYahagi/2025/tree/main/GIF_Website",
    },
  ]);
</script>

<header>
  <h1>Harmony</h1>
  <nav>
    <ul>
      {#each navItem as { name, path }, i (i + 1)}
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
    padding: 15px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    h1 {
      font-size: 3rem;
    }

    nav {
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin: 5px;

          a {
            text-decoration: none;
            font-size: 1rem;
            border-bottom: 2px solid transparent;
            transition: 1s;
            &:hover {
              border-bottom: 2px solid #fff;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
