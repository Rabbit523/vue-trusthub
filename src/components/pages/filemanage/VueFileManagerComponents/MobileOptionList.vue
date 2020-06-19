<template>
  <div class="options-wrapper">
    <transition name="context-menu">
      <div v-show="isVisible" ref="contextmenu" class="options" @click="closeAndResetContextMenu">
        <div class="menu-wrapper">
          <ul class="menu-options" v-if="!$isCompactScale()">
            <li class="menu-option" @click="changePreviewType">Switch Layout</li>
            <li class="menu-option" @click="createFolder">Create Folder</li>
          </ul>
        </div>
        <div class="menu-wrapper">
          <ul class="menu-options">
            <li class="menu-option" @click="renameItem" v-if="fileInfoDetail">Rename</li>
            <li class="menu-option" @click="downloadItem" v-if="isFile || isImage">Download</li>
            <li class="menu-option delete" @click="removeItem" v-if="fileInfoDetail">Delete</li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isVisible" class="vignette" @click="closeAndResetContextMenu"></div>
    </transition>
  </div>
</template>

<script>
import { events } from '@/bus'
import { mapGetters } from 'vuex'

export default {
  name: 'MobileOptionList',
  computed: {
    ...mapGetters('filemanage', ['fileInfoDetail']),
    isFile () {
      return !!(this.fileInfoDetail && this.fileInfoDetail.type === 'file')
    },
    isImage () {
      return !!(this.fileInfoDetail && this.fileInfoDetail.type === 'image')
    },
    isFolder () {
      return !!(this.fileInfoDetail && this.fileInfoDetail.type === 'folder')
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    changePreviewType () {
      this.$store.dispatch('filemanage/changePreviewType')
    },
    downloadItem () {
      // Download file
      this.$downloadFile(
        this.fileInfoDetail.file_url,
        `${this.fileInfoDetail.name}.${this.fileInfoDetail.mimetype}`
      )
    },
    removeItem () {
      // Dispatch remove item
      this.$store.dispatch('filemanage/removeItem', {
        unique_id: this.fileInfoDetail.unique_id,
        type: this.fileInfoDetail.type
      })
    },
    renameItem () {
      const itemName = prompt(
        'Change your item name',
        this.fileInfoDetail.name
      )

      if (itemName && itemName !== '') {
        this.$store.dispatch('filemanage/changeItemName', {
          unique_id: this.fileInfoDetail.unique_id,
          type: this.fileInfoDetail.type,
          name: itemName
        })
      }
    },
    createFolder () {
      if (this.$isMobile()) {
        const folderName = prompt('Please enter your new folder name')

        // Create folder
        if (folderName) this.$createFolder(folderName)
      } else {
        // Create folder
        this.$createFolder('New Folder')
      }
    },
    closeAndResetContextMenu () {
      events.$emit('fileItem:deselect')

      // Close context menu
      this.isVisible = false
    }
  },
  created () {
    events.$on('mobileMenu:show', () => {
      // Show context menu
      this.isVisible = !this.isVisible
    })

    events.$on('mobileMenu:hide', () => {
      this.isVisible = false
    })

    events.$on('mobileMenu:hide', () => {
      this.isVisible = false
    })
  }
}
</script>

<style scoped lang="scss">

.vignette {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  cursor: pointer;
  opacity: 1;
}

.menu-wrapper {
  padding: 0 10px;
  margin-bottom: 10px;
}

.options {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;

  &.showed {
    display: block;
  }

  .menu-options {
    margin-top: 10px;
    box-shadow: $shadow;
    background: white;
    border-radius: 8px;
    list-style: none;
    width: 100%;

    .menu-option {
      font-weight: 600;
      @include font-size(15);
      cursor: pointer;
      width: 100%;
      padding: 22px 30px;
      text-align: center;

      &:hover {
        background: $light_background;
        color: $theme;
      }

      &.delete {
        color: $danger;
      }
    }
  }
}

// Transition
.context-menu-enter-active,
.fade-enter-active {
  transition: all 300ms ease;
}

.context-menu-leave-active,
.fade-leave-active {
  transition: all 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.context-menu-enter,
.context-menu-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.context-menu-leave-active {
  position: absolute;
}
</style>
