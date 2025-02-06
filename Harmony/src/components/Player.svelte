<script lang=ts>
  let audio: HTMLAudioElement
  let isPlaying = $state(false)
  
  function togglePlay() {
    if(audio.paused) {
      audio.play()
      isPlaying = true
    } else {
      audio.pause()
      isPlaying = false
    }
  }
</script>


<div class="player-div">
  <audio bind:this={audio} src={`src/assets/sound/music1.mp3`}></audio>
  <div class="player-contents">
    <img src="src/assets/img/harmony.gif" alt="hand with rose">
    <p>333 - Awaked</p>

    <button onclick={togglePlay}>{isPlaying ? "▶" : "⏸"}</button>
  </div>
</div>

<style lang="scss">
  .player-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .player-contents {  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      width: 400px;     
      border: 5px solid #fff;
      border-radius: 10px;
      box-shadow: 15px 20px 10px#333;
      
      img {
        height: auto;
      }

      button {
        font-size: 1.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        height: 80px;
        width: 100%;
        padding: 15px;
        background-color: #fff;
        color: #000;
      }
    }
}


</style>