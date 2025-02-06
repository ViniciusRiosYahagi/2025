<!-- Script -->
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
<!-- HTML -->
<audio bind:this={audio} src={`src/assets/sound/music1.mp3`}></audio>
<button onclick={togglePlay}>{isPlaying ? "Play" : "Stop"}</button>
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