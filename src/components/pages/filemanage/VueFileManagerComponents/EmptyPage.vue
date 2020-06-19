<template>
  <div class="empty-page" v-if="isLoading || isEmpty">
    <div class="empty-state">
      <div class="text-content" v-if="isEmpty && !isLoading">
        <h1 class="title">There is Nothing</h1>
        <p class="description">Upload some files here easily via upload button</p>
        <ButtonUpload
          @input.native="$uploadFiles(files)"
          v-model="files"
          button-style="theme"
        >Upload File</ButtonUpload>
      </div>
      <div class="text-content" v-if="isLoading">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUpload from './ButtonUpload'
import Spinner from './Spinner'
import { mapGetters } from 'vuex'

export default {
  name: 'EmptyPage',
  props: ['title', 'description'],
  components: {
    ButtonUpload,
    Spinner
  },
  computed: {
    ...mapGetters('filemanage', ['data', 'isLoading']),
    isEmpty () {
      return this.data.length === 0
    }
  },
  data () {
    return {
      files: undefined
    }
  }
}
</script>

<style scoped lang="scss">

.empty-page {
  height: 100%;
  display: flex;
  align-items: center;

  .empty-state {
    margin: 0 auto;
    transform: translateY(-50%);
  }
}

.text-content {
  text-align: center;
  margin: 30px 0;

  .title {
    @include font-size(24);
  }

  .description {
    @include font-size(15);
    color: $text-muted;
    margin-bottom: 30px;
    display: block;
  }
}
</style>
