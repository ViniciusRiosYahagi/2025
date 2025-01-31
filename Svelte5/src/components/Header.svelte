<script>
  let { title } = $props()
</script>

<header>
  <h1><a href="/">Mercury</a></h1>
  <nav>
    <ul>
      <li><a href="/">News</a></li>
      <li><a href="/create">Create</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<h1 class="subtitle">{title}</h1>

<style lang="scss">
  @import '../styles/variables';

  header {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    
    h1 {
      a {
        font-size: $title;
      }
    }

    nav {
      ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        li {
          a {
            border-bottom: 2px solid transparent;
            transition: 1s;
            &:hover {
              border-bottom: 2px solid $color02;
            }
          }
        }
      }
    }
  }

  .subtitle {
    text-align: center;
    font-size: $subtitle;
    margin-top: 15px;
  }
</style>