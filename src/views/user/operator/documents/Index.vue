<template>
  <div id="heromanage">
      <div class="vx-row">
           <div class="vx-col w-full">
                <vx-card>
                    <DocumentsControl :config="config" style="height:70vh" />
                </vx-card>
            </div>
      </div>
  </div>
</template>

<script>
import DocumentsControl from '@/components/pages/filemanage/VueFileManager'

export default {
  name: 'app',
  components: {
    DocumentsControl
  },
  data () {
    return {
      config: {
        api: 'http://localhost:8000/api'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#heromanage {
  height: 100%;
  width: 100%;
}
</style>
