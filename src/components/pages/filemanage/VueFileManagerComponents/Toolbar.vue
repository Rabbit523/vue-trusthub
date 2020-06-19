<template>
  <div class="toolbar">
    <!--Desktop Toolbar-->
    <div class="toolbar-wrapper" v-if="!$isMinimalScale()">
      <!-- Go back-->
      <div class="toolbar-go-back" v-if="startDirectory">
        <div @click="goBack" class="go-back-button">
          <FontAwesomeIcon v-if="browseHistory.length > 0" class="icon-back" icon="chevron-left"></FontAwesomeIcon>
          <span class="back-directory-title">
            {{
            directoryName
            }}
          </span>
        </div>
      </div>

      <!-- Tools-->
      <div class="toolbar-tools">
        <div class="toolbar-button-wrapper">
          <SearchBar />
        </div>
        <div class="toolbar-button-wrapper">
          <ToolbarButtonUpload source="upload" action="Upload file" />
          <ToolbarButton source="trash" action="Delete" @click.native="deleteItems" />
          <ToolbarButton @click.native="createFolder" source="folder-plus" action="Create folder" />
        </div>
        <div class="toolbar-button-wrapper">
          <ToolbarButton
            :source="preview"
            action
            @click.native="$store.dispatch('filemanage/changePreviewType')"
          />
          <ToolbarButton
            :class="{ active: fileInfoVisible }"
            @click.native="$store.dispatch('filemanage/fileInfoToggle')"
            source="info"
          />
        </div>
      </div>
    </div>

    <!--Mobile toolbar-->
    <div class="toolbar-wrapper" v-if="$isMinimalScale()">
      <div class="mobile-toolbar">
        <!-- Go back-->
        <div @click="goBack" class="go-back-button">
          <FontAwesomeIcon v-if="browseHistory.length > 0" class="icon-back" icon="chevron-left"></FontAwesomeIcon>
        </div>

        <!--Folder Title-->
        <div class="directory-name">{{ directoryName }}</div>

        <!--More Actions-->
        <div @click="moreActions" class="more-actions-button">
          <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarButtonUpload from './ToolbarButtonUpload'
import ToolbarButton from './ToolbarButton'
import SearchBar from './SearchBar'
import { mapGetters } from 'vuex'
import { events } from '@/bus'

export default {
  name: 'ToolBar',
  components: {
    ToolbarButtonUpload,
    ToolbarButton,
    SearchBar
  },
  computed: {
    ...mapGetters('filemanage', [
      'preview_type',
      'fileInfoVisible',
      'fileInfoDetail',
      'currentFolder',
      'browseHistory',
      'sizeType',
      'startDirectory'
    ]),
    directoryName () {
      return this.currentFolder ? this.currentFolder.name : this.startDirectory.name
    },
    previousFolder () {
      const length = this.browseHistory.length - 2

      return this.browseHistory[length] ? this.browseHistory[length] : this.startDirectory
    },
    preview () {
      return this.preview_type === 'list' ? 'th' : 'th-list'
    }
  },
  methods: {
    moreActions () {
      events.$emit('mobileMenu:show')
    },
    goBack () {
      this.$store.dispatch('filemanage/goToFolder', [this.previousFolder, true])
    },
    deleteItems () {
      events.$emit('items:delete')
    },
    createFolder () {
      this.$createFolder()
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-toolbar {
  text-align: center;
  position: relative;
  display: flex;

  .go-back-button {
    flex: 1;
    text-align: left;
  }

  .more-actions-button {
    flex: 1;
    text-align: right;

    &.is-active {
      svg path {
        fill: #383838;
      }
    }
  }

  .directory-name {
    text-align: center;
    width: 100%;
  }
}

.toolbar {
  .toolbar-wrapper {
    display: flex;
    position: relative;

    > div {
      width: 100%;
      flex-grow: 1;
      align-self: center;
      white-space: nowrap;
    }
  }

  .directory-name {
    vertical-align: middle;
    @include font-size(17);
    color: $text;
    font-weight: 600;
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }

  .icon-back {
    vertical-align: middle;
    cursor: pointer;
  }

  .toolbar-go-back {
    cursor: pointer;

    .back-directory-title {
      margin-left: 12px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .toolbar-position {
    text-align: center;

    span {
      @include font-size(17);
      font-weight: 600;
    }
  }

  .toolbar-tools {
    text-align: right;

    .toolbar-button-wrapper {
      margin-left: 75px;
      display: inline-block;
      vertical-align: middle;

      &:first-child {
        margin-left: 0 !important;
      }
    }

    button {
      margin-left: 20px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
