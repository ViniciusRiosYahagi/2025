<article>
  <h1 class="title">Space X</h1>
  <p class="date">25/01/2024</p>
  <img class="image_text" src="src/img/spacex.jpg" alt="">
  <p class="text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis nibh sed tristique tristique. Duis sed libero in nunc rutrum vulputate vel a nulla. Vivamus in venenatis urna, ut porta odio. In lacinia vehicula neque ac faucibus. Sed id sagittis mauris. Aenean et est sit amet augue sodales euismod. Mauris odio justo, pretium nec nisl dignissim, mattis scelerisque justo. Pellentesque vitae dui justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</article>

<style lang="scss">

  @import '../styles/variables';
  @import '../styles/mixins';

  article {
    position: relative;
    @include flex(column,center,_, 15px);
    @include mp(15px, 15px);
    border-left: 2px solid $color02;
   
    .title {
      font-size: $subtitle;
    }

    .date {
      font-size: $paragraph;
    }

    .image {
      max-width: 1000px;
    }

    .image_text {
      filter: opacity(25%);
      max-width: 1000px;
    }    

    .text {
      position: absolute;
      font-size: $paragraph;
      max-width: 1000px;
    }
  }
</style>

