<template>
  <div id="trusthub-voice-record">
    <!-- Buttons -->
    <ul class="voicebtns">
      <li>
        <i class="material-icons">fast_rewind</i>
      </li>
      <li>
        <i class="material-icons">play_arrow</i>
      </li>
      <li>
        <i class="material-icons">fast_forward</i>
      </li>
    </ul>
    <!-- Volume Range -->
    <div class="voicevolume">
      <i class="material-icons">volume_mute</i>
      <vs-slider v-model="volumeRange" />
      <i class="material-icons">volume_up</i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      volumeRange: 50
    }
  }
}
</script>

<style lang="scss" scoped>
#trusthub-voice-record {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ul.voicebtns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    li {
      padding: 5px 20px;
    }
    i {
      color: #ccc;
      font-size: 53px;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #9c9c9c;
      }
    }
  }
  .voicevolume {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    > i {
      margin: 0 15px;
    }
    .vs-slider {
      min-width: 240px;
    }
  }
}
</style>