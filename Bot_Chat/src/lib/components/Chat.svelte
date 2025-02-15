<script>
  import Input from "./Input.svelte";
</script>

<section>
  <div class="bot-div">
    <div class="bot-chat">
      <p>Hi!</p>
    </div>
  </div>

  <div class="user-div">
    <div class="user-chat">
      <p>Yo!</p>
    </div>
  </div>
</section>



<style lang="scss">
  @use "../../lib/styles/varibale" as var;
  @use "../../lib/styles/mixins";

  section {
    @include flex(column,_,_);
    background-color: var.$color-bg01;
    height: 600px;
    width: 600px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 3px 6px 9px var.$color-sw;
  }

  .bot-div {
    display: flex;
    align-self: flex-start;
    max-width: 50%;
    p {
    background-color: var.$color-bot;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    }
  }

  .user-div {
    float: right;
    display: flex;
    align-self: flex-end;

    p {
      background-color: var.$color-bg02;
      padding: 15px;
      border-radius: 10px;
      
    }
  }
</style>