<template>
  <div
    @contextmenu.prevent.capture="contextMenu($event, undefined)"
    id="hi5ve-file-manager"
    v-cloak
    :class="sizeType"
  >
    <Alert />
    <ContextMenu />
    <Toolbar />
    <ProgressBar />
    <MobileOptionList />
    <FilesContainer />
  </div>
</template>

<script>
import MobileOptionList from './VueFileManagerComponents/MobileOptionList'
import FilesContainer from './VueFileManagerComponents/FilesContainer'
import ContextMenu from './VueFileManagerComponents/ContextMenu'
import ProgressBar from './VueFileManagerComponents/ProgressBar'
import Toolbar from './VueFileManagerComponents/Toolbar'
import Alert from './VueFileManagerComponents/Alert'
import { events } from '@/bus'
import { mapGetters } from 'vuex'


export default {
  name: 'VueFileManager',
  props: ['config'],
  components: {
    MobileOptionList,
    FilesContainer,
    ProgressBar,
    ContextMenu,
    Toolbar,
    Alert
  },
  computed: {
    ...mapGetters('filemanage', ['sizeType'])
  },
  methods: {
    contextMenu (event, item) {
      events.$emit('contextMenu:show', event, item)
    },
    handleResize () {
      const containerWidth = document.getElementById('hi5ve-file-manager')
        .offsetWidth

      if (containerWidth < 680) this.$store.commit('filemanage/SET_SIZE_TYPE', 'minimal-scale')
      if (containerWidth > 680 && containerWidth < 960) this.$store.commit('filemanage/SET_SIZE_TYPE', 'compact-scale')
      if (containerWidth > 960) this.$store.commit('filemanage/SET_SIZE_TYPE', 'full-scale')
    }
  },
  mounted () {
    // Set api
    this.$store.commit('filemanage/SET_API', this.config.api)

    if (this.config.directory) {
      // Set start directory
      this.$store.commit('filemanage/SET_START_DIRECTORY', this.config.directory)

      // Load folder
      this.$store.dispatch('filemanage/goToFolder', [
        {
          unique_id: this.config.directory.unique_id,
          name: this.config.directory.name
        },
        false,
        true
      ])
    } else {
      // Set start directory
      this.$store.commit('filemanage/SET_START_DIRECTORY', {
        unique_id: 0,
        name: 'Home'
      })

      // Load folder
      this.$store.dispatch('filemanage/goToFolder', [
        { unique_id: 0, name: 'Home' },
        false,
        true
      ])
    }

    // Listeners
    window.addEventListener('resize', this.handleResize)

    // Call method
    this.handleResize()
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap");
* {
  outline: 0;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: $text;
}
[v-cloak] > * {
  display: none;
}

#hi5ve-file-manager {
  background: white;
  padding: 15px 15px 0;
  overflow: hidden;
  width: 100%;
  position: relative;
  min-width: 320px;
}

#hi5ve-file-manager {
  &.minimal-scale {
    .popup-wrapper {
      left: 15px;
      right: 15px;
      padding: 25px 15px;
    }

    .file-content {
      top: 53px;

      &.is-offset {
        margin-top: 60px;
      }
    }

    .toolbar {
      display: block;
    }

    .toolbar-go-back {
      padding-top: 15px;
    }

    .toolbar-tools {
      text-align: left;
      display: flex;

      .toolbar-button-wrapper {
        width: 100%;

        &:last-child {
          text-align: right;
        }
      }
    }

    .files-container .file-list {
      &.grid {
        grid-template-columns: repeat(auto-fill, 110px);

        .file-wrapper {
          margin-bottom: 0;

          .file-item {
            width: 100px;
            padding-bottom: 10px;
          }

          .icon-item {
            padding-top: 10px;

            svg {
              @include font-size(60);
            }

            &.file .file-icon-text {
              @include font-size(12);
            }

            &.folder {
              padding-top: 20px;
              padding-bottom: 5px;
            }

            &.image img {
              width: 70px;
              height: 70px;
            }
          }

          .item-name .name {
            @include font-size(13);
            line-height: 1.2;
            max-height: 30px;
          }
        }
      }
    }

    .file-wrapper {
      .item-name .name {
        max-width: 220px;
      }
    }

    .search-bar input {
      min-width: initial;
    }
  }

  &.compact-scale {
    padding: 10px 10px 0;

    .toolbar-button-wrapper {
      margin-left: 35px;
    }

    .search-bar input {
      min-width: 240px;
    }

    .toolbar-go-back span {
      max-width: 140px;
    }

    .file-content {
      top: 70px;
    }
  }
}
</style>
