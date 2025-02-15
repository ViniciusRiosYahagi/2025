<script lang="ts">
  const navItem: NavItem[] = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Create', path: '/contac'},
  ]
</script>

<header>
  <h1>Your Bot</h1>
  <nav>
    <ul>
      {#each navItem as item}
        <li>
          <a href={item.path}>{item.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @use "../../lib/styles/varibale" as var;
  @use "../../lib/styles/mixins" as mx;

  header {
    position: fixed;
    top: 0;
    
    width: 100%;
    padding: 15px;
    background-color: var.$color-bg01;
    box-shadow: 3px 5px 10px var.$color-sw;

    h1 {
      font-size: 2rem;
      color: var.$color-text;
    }

    nav {
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin-right: 10px;
          a {
            text-decoration: none;
            color: var.$color-text;
            &:hover {
              border-bottom: 2px solid var.$color-text;
            }
          }
        }
      }
    }
  }
</style>