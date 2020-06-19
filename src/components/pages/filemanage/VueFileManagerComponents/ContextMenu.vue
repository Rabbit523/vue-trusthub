<template>
  <div
    ref="contextmenu"
    class="contextmenu"
    :style="{ top: positionY + 'px', left: positionX + 'px' }"
    v-show="isVisible"
  >
    <ul class="menu-options" id="menu-options-list" ref="list">
      <li class="menu-option" @click="createFolder">Create Folder</li>
      <li class="menu-option" @click="removeItem" v-if="item">Delete</li>
      <li class="menu-option" @click="ItemDetail" v-if="item">Detail</li>
      <li class="menu-option" @click="downloadItem" v-if="isFile || isImage">Download</li>
    </ul>
  </div>
</template>

<script>
import { events } from '@/bus'

export default {
  name: 'ContextMenu',
  computed: {
    isFile () {
      return !!(this.item && this.item.type === 'file')
    },
    isImage () {
      return !!(this.item && this.item.type === 'image')
    }
  },
  data () {
    return {
      item: undefined,
      isVisible: false,
      positionX: 0,
      positionY: 0
    }
  },
  methods: {
    downloadItem () {
      // Download file
      this.$downloadFile(
        this.item.file_url,
        `${this.item.name}.${this.item.mimetype}`
      )

      // Hide context menu
      this.closeAndResetContextMenu()
    },
    ItemDetail () {
      // Dispatch remove item
      this.$store.dispatch('filemanage/loadFileInfoDetail', this.item)

      // Show panel if is not open
      this.$store.dispatch('filemanage/fileInfoToggle', true)

      // Hide context menu
      this.closeAndResetContextMenu()
    },
    removeItem () {
      // Dispatch remove item
      this.$store.dispatch('filemanage/removeItem', {
        unique_id: this.item.unique_id,
        type: this.item.type
      })

      // Hide context menu
      this.closeAndResetContextMenu()
    },
    createFolder () {
      // Create folder
      this.$createFolder('New Folder')

      // Hide context menu
      this.closeAndResetContextMenu()
    },
    closeAndResetContextMenu () {
      // Close context menu
      this.isVisible = false

      // Reset item container
      this.item = undefined
    }
  },
  created () {
    events.$on('contextMenu:show', (event, item) => {
      // Store item
      this.item = item

      const list = document.getElementById('menu-options-list')

      const VerticalOffsetArea = item ? list.childNodes.length * 50 : 50
      const HorizontalOffsetArea = 150

      const container = document.getElementById('hi5ve-file-manager')

      const x = event.clientX - container.offsetLeft
      const y = event.clientY - container.offsetTop

      // Set position Y
      if (container.offsetHeight - y < VerticalOffsetArea) {
        this.positionY = y - VerticalOffsetArea
      } else {
        this.positionY = y
      }

      // Set position X
      if (container.offsetWidth - x < HorizontalOffsetArea) {
        this.positionX = x - HorizontalOffsetArea
      } else {
        this.positionX = x
      }

      // Show context menu
      this.isVisible = true
    })

    events.$on('contextMenu:hide', () => (this.isVisible = false))
  }
}
</script>

<style scoped lang="scss">

.contextmenu {
  max-width: 190px;
  box-shadow: $shadow;
  background: white;
  position: absolute;
  z-index: 99;
  border-radius: 8px;
  overflow: hidden;

  &.showed {
    display: block;
  }

  .menu-options {
    list-style: none;
    width: 100%;
    margin: 0;

    .menu-option {
      font-weight: 600;
      @include font-size(15);
      padding: 15px 30px;
      cursor: pointer;
      width: 100%;

      &:hover {
        background: $light_background;
        color: $theme;
      }
    }
  }
}
</style>
