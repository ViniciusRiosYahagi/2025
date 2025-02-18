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
  @import "../../lib/styles/mixins";

  section {
    @include flex(column,_,_);
    @include hw(600px, 600px);
    background-color: var.$color-bg01;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 3px 6px 9px var.$shadow;
  }

  .bot-div {
    display: flex;
    align-self: flex-start;
    max-width: 50%;

    p {
      background-color: var.$text-01;
      color: var.$color-bg01;
      padding: 15px;
      border-radius: 10px;
    }
  }

  .user-div {
    display: flex;
    align-self: flex-end;
    max-width: 50%;

    p {
      background-color: var.$color-bg02;
      color: var.$color-bg01;
      padding: 15px;
      border-radius: 10px;
    }
  }
</style>