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
  @import '../styles/mixins';

  header {
    @include flex(_,space-evenly,flex-end, );
    
    h1 {
      a {
        font-size: $title;
      }
    }

    nav {
      ul {
        list-style: none;
        @include flex(_,_,_, 15px);
        li {
          a {
            border-bottom: 2px solid transparent;
            transition: 0.5s;
            font-size: $paragraph;
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
  }
</style>