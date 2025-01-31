<article>
  <h1 class="title">Space X</h1>
  <p class="date">25/01/2024</p>
  <img class="image" src="public/img/space2.JPG" alt="">
  <p class="text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis nibh sed tristique tristique. Duis sed libero in nunc rutrum vulputate vel a nulla. Vivamus in venenatis urna, ut porta odio. In lacinia vehicula neque ac faucibus. Sed id sagittis mauris. Aenean et est sit amet augue sodales euismod. Mauris odio justo, pretium nec nisl dignissim, mattis scelerisque justo. Pellentesque vitae dui justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis nibh sed tristique tristique. Duis sed libero in nunc rutrum vulputate vel a nulla. Vivamus in venenatis urna, ut porta odio. In lacinia vehicula neque ac faucibus. Sed id sagittis mauris. Aenean et est sit amet augue sodales euismod. Mauris odio justo, pretium nec nisl dignissim, mattis scelerisque justo. Pellentesque vitae dui justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</article>

<style lang="scss">

  @import '../styles/variables';

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    border-left: 2px solid $color02;
    padding: 15px;
    margin: 15px;
    .title {
      font-size: $subtitle;
    }

    .date {
      font-size: 0.7rem;
    }

    .image {
      max-width: 1000px;
    }

    .image_text {
      filter: opacity(50%);
      width: clamp(300px, 1000px, 1200px);
    }    

    .text {
      display: none;
      position: absolute;
      font-size: 1rem;
      max-width: 1000px;
    }
  }
</style>

