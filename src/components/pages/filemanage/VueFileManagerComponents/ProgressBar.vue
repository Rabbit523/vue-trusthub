<template>
  <transition name="info-panel">
    <div v-if="uploadingFilesCount" class="upload-progress">
      <div class="progress-title">
        <span>
          Uploading files {{ uploadingFilesCount.current }}/{{
          uploadingFilesCount.total
          }}
        </span>
      </div>
      <div class="progress-bar">
        <span :style="{ width: uploadingFileProgress + '%' }"></span>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilesContainer',
  computed: {
    ...mapGetters('filemanage', ['uploadingFileProgress', 'uploadingFilesCount'])
  }
}
</script>

<style scoped lang="scss">

.info-panel-enter-active,
.info-panel-leave-active {
  transition: all 0.3s ease;
}

.info-panel-enter,
.info-panel-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.upload-progress {
  width: 100%;
  background: white;
  padding-top: 30px;
  padding-bottom: 10px;
  position: relative;
  z-index: 1;

  .progress-title {
    font-weight: 700;
    @include font-size(14);
    text-align: center;
  }

  .progress-bar {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: $light_background;
    margin-top: 5px;
    border-radius: 10px;

    span {
      background: $theme;
      display: block;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>
