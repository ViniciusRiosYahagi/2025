<div>
  <h1>Obtenha o seu Chatbot</h1>
  <p>
    Nulla efficitur ultricies fringilla. Proin interdum viverra tincidunt. Vivamus sit amet augue dictum, ullamcorper leo in, eleifend magna. Cras viverra massa ut mattis mollis. Sed sodales magna urna, quis pharetra nisi rutrum non. Nam varius odio a urna cursus, id iaculis diam mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
  </p>
  <button>Planos</button>
</div>

<style lang="scss">
  @use "../../lib/styles/varibale" as var;
  @use "../../lib/styles/mixins" as mx;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    max-width: 50%;
   
    h1 {
      font-size: 3rem;
    }


    button {
    
      padding: 15px;
      border: none;
      border-radius: 10px;
      background-color: var.$color-bg01;
    }
  }
</style>