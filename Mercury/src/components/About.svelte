<article>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in tincidunt lectus. Morbi tempor, leo sit amet tempor rutrum, mi risus accumsan velit, a rhoncus dui ex nec ligula. Vivamus quis orci mattis, mollis turpis at, interdum nunc. Duis sollicitudin justo vel odio ultrices aliquam. Phasellus elementum elit vel nunc consectetur, vitae sollicitudin nisi sollicitudin. In aliquet velit sed ante ultricies pulvinar. Mauris vulputate tincidunt diam sit amet tempus. Quisque eget tristique augue. Duis non ligula sed lectus lacinia cursus a in lacus. Vivamus id metus felis. Phasellus nec lorem dui.
  </p>

  <p>
    Mauris sagittis a nibh at pretium. Maecenas cursus ante sed sem ultricies iaculis. Donec at libero sed lectus aliquet blandit vel vel nunc. In hac habitasse platea dictumst. Curabitur gravida nibh diam, id posuere est pretium non. Nam ac nisi convallis, ornare sem cursus, elementum lectus. Proin venenatis malesuada nisl sed euismod. Ut ligula elit, tincidunt congue sapien eget, tristique sodales quam. Integer bibendum tempus condimentum. Aliquam ut ipsum nunc. Donec id gravida dui. 
  </p>

  <p>
    Ut tincidunt mollis gravida. Duis consequat euismod suscipit. Sed feugiat quam at nisi pellentesque, quis scelerisque tortor porta. Phasellus aliquet libero eget risus fermentum, ut luctus libero laoreet. Duis consequat sit amet sapien et commodo. Praesent ultricies ante massa, ac condimentum odio maximus eget. Duis facilisis lacus tellus, vel aliquet erat interdum nec. Donec tincidunt non odio sed lobortis. Praesent aliquet sagittis sapien ut scelerisque. Etiam augue libero, consectetur eu est eget, bibendum lobortis purus. Etiam lacinia, magna vitae sagittis viverra, elit magna eleifend sem, porttitor congue augue odio ac sem. Nam ipsum lacus, tincidunt a tempor sed, ornare a nibh. 
  </p>

  <p>
    Suspendisse pretium a justo vitae tempor. Duis id quam a turpis placerat iaculis at et augue. Donec malesuada tellus sem, vel pellentesque nunc blandit vitae. Vivamus maximus nibh in blandit placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac elit vitae lorem egestas eleifend. Duis porttitor sollicitudin odio id venenatis. 
  </p>
</article>

<style lang="scss">
  @import "../styles/variables";
  @import "../styles/mixins";
  

  article {
    @include flex(column,center,center, 15px);
    @include mp(0, 15px);
    border-left: 2px solid $color02;
    
    p {
      font-size: $paragraph;
      max-width: 1000px;
      
    }
  }
</style>