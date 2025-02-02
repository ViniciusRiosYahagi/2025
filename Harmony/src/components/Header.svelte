<header>
  <h1><a href="/" class="link">Harmony</a></h1>
  <nav>
    <ul>
      <li><a href="/" class="link">Home</a></li>
      <li><a href="/" class="link">About</a></li>
      <li><a href="/" class="link">Github</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 1rem;
    width: 100%;

    h1 {
      font-size: 3rem;
    }
    
    ul {
      list-style: none;
      li {
        display: inline-block;
        margin-left: 5px;
        a {
          font-size: 1rem;
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

</style>
