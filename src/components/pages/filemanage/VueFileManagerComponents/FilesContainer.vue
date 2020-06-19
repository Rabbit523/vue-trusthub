<template>
  <div class="file-content" :class="{ 'is-offset': uploadingFilesCount }">
    <div
      class="files-container"
      ref="fileContainer"
      :class="{'is-fileinfo-visible': fileInfoVisible && !$isMinimalScale()}"
      @click="filesContainerClick"
    >
      <!--Searchbar-->
      <SearchBar v-if="$isMinimalScale()" class="mobile-search" />

      <!--Item previews list-->
      <div v-if="isList" class="file-list-wrapper">
        <transition-group name="file" tag="section" class="file-list" :class="preview_type">
          <FileItemList
            @dragstart="dragStart(item)"
            @drop="dragFinish(item)"
            @click.native="clickedFileItem(item.unique_id)"
            @contextmenu.native.prevent="contextMenu($event, item)"
            :data="item"
            v-for="item in data"
            :key="item.unique_id"
            class="file-item"
          />
        </transition-group>
      </div>

      <!--Item previews grid-->
      <div v-if="isGrid" class="file-grid-wrapper">
        <transition-group name="file" tag="section" class="file-list" :class="preview_type">
          <FileItemGrid
            @dragstart="dragStart(item)"
            @drop="dragFinish(item)"
            @click.native="clickedFileItem(item.unique_id)"
            @contextmenu.native.prevent="contextMenu($event, item)"
            :data="item"
            v-for="item in data"
            :key="item.unique_id"
            class="file-item"
          />
        </transition-group>
      </div>

      <!--Upload button for mobile version-->
      <ButtonUpload
        v-if="!isEmpty && !isLoading && $isMinimalScale()"
        button-style="secondary"
        class="button-upload"
      >Upload File</ButtonUpload>

      <!--Show empty page if folder is empty-->
      <EmptyPage v-if="!isSearching" />

      <!--Show empty page if no search results-->
      <EmptyMessage v-if="isSearching && isEmpty" message="Nothing was found." icon="eye-slash" />
    </div>

    <div
      v-if="!$isMinimalScale()"
      class="file-info-container"
      :class="{ 'is-fileinfo-visible': fileInfoVisible }"
    >
      <!--File info panel-->
      <FileInfoPanel v-if="fileInfoDetail" />

      <!--If file info panel empty show message-->
      <EmptyMessage v-if="!fileInfoDetail" message="There is nothing to preview." icon="eye-slash" />
    </div>
  </div>
</template>

<script>
import FileInfoPanel from './FileInfoPanel'
import ButtonUpload from './ButtonUpload'
import FileItemList from './FileItemList'
import FileItemGrid from './FileItemGrid'
import EmptyMessage from './EmptyMessage'
import EmptyPage from './EmptyPage'
import SearchBar from './SearchBar'
import { mapGetters } from 'vuex'
import { events } from '@/bus'


export default {
  name: 'FilesContainer',
  components: {
    FileInfoPanel,
    FileItemList,
    ButtonUpload,
    FileItemGrid,
    EmptyMessage,
    SearchBar,
    EmptyPage
  },
  computed: {
    ...mapGetters('filemanage', [
      'uploadingFilesCount',
      'fileInfoVisible',
      'fileInfoDetail',
      'preview_type',
      'isSearching',
      'isLoading',
      'sizeType',
      'data'
    ]),
    isGrid () {
      return this.preview_type === 'grid'
    },
    isList () {
      return this.preview_type === 'list'
    },
    isEmpty () {
      return this.data.length === 0
    }

  },
  data () {
    return {
      draggingId: undefined
    }
  },
  methods: {
    dragStart (data) {
      // Store dragged folder
      this.draggingId = data
    },
    dragFinish (data) {
      // Prevent to drop on file or image
      if (data.type !== 'folder' || this.draggingId === data) return

      // Move folder to new parent
      this.moveTo(this.draggingId, data)
    },
    moveTo (from_item, to_item) {
      this.$store.dispatch('filemanage/moveItem', [from_item, to_item])
    },
    clickedFileItem (unique_id) {
      events.$emit('fileItem:clicked', unique_id)
    },
    contextMenu (event, item) {
      events.$emit('contextMenu:show', event, item)
    },
    filesContainerClick (e) {
      if (e.target.className === 'file-list grid') {
        events.$emit('fileItem:deselect')
      }
      events.$emit('contextMenu:hide')
    }
  },
  created () {
    events.$on('fileItem:deselect', () => this.$store.commit('filemanage/CLEAR_FILEINFO_DETAIL')
    )

    events.$on('scrollTop', () => {
      // Scroll top
      const container = document.getElementsByClassName('files-container')[0]

      if (container) container.scrollTop = 0
    })

    // On items delete
    events.$on('items:delete', () => {
      this.$store.dispatch('filemanage/removeItem', {
        unique_id: this.fileInfoDetail.unique_id,
        type: this.fileInfoDetail.type
      })
    })
  }
}
</script>

<style scoped lang="scss">

.button-upload {
  display: block;
  text-align: center;
  margin: 20px 0;
}

.mobile-search {
  margin-bottom: 20px;
}

.file-content {
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 15px;
  right: 15px;
  @include transition;

  &.is-offset {
    margin-top: 30px;
  }
}

.files-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @include transition;

  &.is-fileinfo-visible {
    right: 320px;
  }

  .file-list {
    &.grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 180px);
      justify-content: space-evenly;
    }
  }
}

.file-info-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  padding: 0 20px;
  overflow: auto;
  @include transform(translateX(120%));
  @include transition;
  background: white;

  &.is-fileinfo-visible {
    @include transform(translateX(0));
  }
}

// Transition
.file-move {
  transition: transform 0.6s;
}

.file-enter-active {
  transition: all 300ms ease;
}

.file-leave-active {
  transition: all 0ms;
}

.file-enter, .file-leave-to /* .list-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateX(-20px);
}

.file-leave-active {
  position: absolute;
}
</style>
