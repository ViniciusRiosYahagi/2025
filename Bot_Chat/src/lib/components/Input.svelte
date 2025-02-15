<div class="input-div">
  <input type="text">
  <button>⏵</button>
</div>

<style lang="scss">
  @use "../../lib/styles/varibale" as var;
  @use "../../lib/styles/mixins" as mx;


  .input-div {
    display: flex;
    
    input {
      flex-grow: 1;
    }

    button {
      flex-grow: 1;
    }
  }
</style>