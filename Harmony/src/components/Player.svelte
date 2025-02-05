<!-- Script -->
<script lang=ts>
  let isplaying = $state(true)
  let audio: HTMLAudioElement

  function togglePlay() {
    if(audio.paused) {
      audio.play()
      isplaying = true
    } else {
      audio.pause()
      isplaying = false
    }
  }
</script>
<!-- HTML -->
<audio bind:this={audio} src={`src/assets/sound/music1.mp3`} autoplay loop></audio>
<button onclick={togglePlay}>{isplaying ? "Stop" : "Play"}</button>
 <!-- Styles -->
<style lang="scss">
    p {
      text-align: center;
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
</style>