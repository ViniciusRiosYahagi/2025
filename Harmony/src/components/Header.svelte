<header>
  <h1><a href="#" class="link">Harmony</a></h1>
  <nav>
    <ul>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Github</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 1rem;

    h1 {
      font-size: 2.2rem;
    }
    
    ul {
      list-style: none;
      li {
        display: inline-block;
        a {
          font-size: 1rem;
          border-bottom: 1px solid transparent;
          &:hover {
          border-bottom: 1px solid #fff;
          }
        }
      }
    }

  }

.link {
      color: #fff;
      text-decoration: none;
  }

</style>
