<script>
  let isplay = $state(false)
  let audioSrc = "src/assets/sonds/music1.mp3"
  let audio

  function toggle() {
    isplay = !isplay
  }
</script>




<div class="player-div">
  <p>333 - Awaken</p>
  <div class="player-control">
    <button>«</button>
    <button onclick={toggle}>{isplay === false ? "▶" : "⏸"}</button>
    <button>»</button>
  </div>
</div>

<style lang="scss">
  .player-div {
    p {
      text-align: center;
      font-size: 1rem;
    }

    .player-control {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-top: 15px;
      width: 200px; 
      height: 50px;

      button {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
}
</style>