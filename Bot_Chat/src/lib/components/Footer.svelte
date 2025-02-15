<footer>
  <h6>Created by Vinicius Yahagi Rios</h6>
</footer>

<style lang="scss">
  @use "../../varibale" as var;

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px;
    box-shadow: -3px -6px 10px var.$color-sw;
    background-color: var.$color-bg01;

    h6 {
      text-align: center;
      color: var.$color-text;
    }
  }
</style>