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
  @use "../../varibale" as var;

  section {
    display: flex;
    flex-direction: column;
  
    background-color: var.$color-bg01;
    height: 600px;
    width: 600px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 3px 6px 9px var.$color-sw;
  }

  .bot-div {
    float: left;
    p {
    background-color: var.$color-bot;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    }
  }

  .user-div {
    float: right;

    p {
      background-color: var.$color-bg02;
      padding: 15px;
      border-radius: 10px;
    }
  }
</style>