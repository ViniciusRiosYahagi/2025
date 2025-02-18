<footer>
  <h6>Created by Vinicius Yahagi Rios</h6>
</footer>

<style lang="scss">
  @use "../../lib/styles/varibale" as var;
  @use "../../lib/styles/mixins" as mx;

  footer {
    width: 100%;
    padding: 15px;
    box-shadow: -3px -6px 10px var.$shadow;
    background-color: var.$color-bg01;

    h6 {
      text-align: center;
      color: var.$text-01;
    }
  }
</style>