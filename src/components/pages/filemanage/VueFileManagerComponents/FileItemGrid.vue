<template>
  <div class="file-wrapper" @click="clickedItem" @dblclick="goToItem" spellcheck="false">
    <!--Grid preview-->
    <div
      draggable="true"
      @dragstart="$emit('dragstart')"
      @drop="$emit('drop'), area = false"
      @dragleave="dragLeave"
      @dragover.prevent="dragEnter"
      class="file-item"
      :class="{ 'is-clicked': isClicked, 'is-dragenter': area }"
    >
      <!--Thumbnail for item-->
      <div class="icon-item" :class="data.type">
        <!--If is file or image, then link item-->
        <span v-if="isFile" class="file-icon-text">
          {{
          data.mimetype
          }}
        </span>

        <!--Folder thumbnail-->
        <FontAwesomeIcon v-if="isFile" class="file-icon" icon="file" />

        <!--Image thumbnail-->
        <img v-if="isImage" :src="data.thumbnail" :alt="data.name" />

        <!--Else show only folder icon-->
        <FontAwesomeIcon v-if="isFolder" class="folder-icon" icon="folder" />
      </div>

      <!--Name-->
      <div class="item-name">
        <!--Name-->
        <span
          ref="name"
          @input="changeItemName"
          :contenteditable="!$isMobile()"
          class="name"
        >{{ item.name }}</span>

        <!--Other attributes-->
        <span v-if="isFile || isImage" class="item-size">
          {{
          data.filesize
          }}
        </span>

        <span v-if="isFolder" class="item-length">
          {{
          data.items == 0
          ? 'Empty'
          : (data.items + ' item') | pluralize(data.items)
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapGetters } from 'vuex'
import { events } from '@/bus'

export default {
  name: 'FileItem',
  props: ['data'],
  computed: {
    ...mapGetters(['preview_type']),
    isFolder () {
      return this.data.type === 'folder'
    },
    isFile () {
      return this.data.type === 'file'
    },
    isImage () {
      return this.data.type === 'image'
    }
  },
  filters: {
    pluralize (word, amount) {
      return amount > 1 ? `${word  }s` : word
    }
  },
  data () {
    return {
      isClicked: false,
      area: false,
      item: undefined,
      self: this
    }
  },
  methods: {
    dragEnter () {
      if (this.data.type !== 'folder') return

      this.area = true
    },
    dragLeave () {
      this.area = false
    },
    clickedItem (e) {
      // Load file info detail
      this.$store.dispatch('filemanage/loadFileInfoDetail', this.data)

      // Get target classname
      const itemClass = e.target.className

      if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return false
    },
    goToItem () {
      if (this.isImage) {
        this.$openImageOnNewTab(this.data.file_url)
      }

      if (this.isFile) {
        this.$downloadFile(
          this.data.file_url,
          `${this.data.name  }.${  this.data.mimetype}`
        )
      }

      if (this.isFolder) {
        // Go to folder
        this.$store.dispatch('filemanage/goToFolder', [this.data, false])
      }
    },
    changeItemName: debounce(function (e) {
      // Prevent submit empty string
      if (e.target.innerText === '') return

      self.$store.dispatch('filemanage/changeItemName', {
        unique_id: self.data.unique_id,
        type: self.data.type,
        name: e.target.innerText
      })
    }, 300)
  },
  created () {
    this.item = this.data

    events.$on('fileItem:clicked', unique_id => {
      if (this.data.unique_id === unique_id) {
        this.isClicked = true
      } else {
        this.isClicked = false
      }
    })

    events.$on('fileItem:deselect', () => {
      // Deselect file
      this.isClicked = false
    })
  }
}
</script>

<style scoped lang="scss">

.file-wrapper {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: text-top;
  width: 100%;

  .item-name {
    display: block;
    padding: 14px 10px 0;
    line-height: 20px;

    .item-size,
    .item-length {
      @include font-size(12);
      font-weight: 100;
      color: $text-muted;
      display: block;
    }

    .name {
      display: block;

      &[contenteditable="true"]:hover {
        text-decoration: underline;
      }
    }

    .name {
      color: $text;
      @include font-size(15);
      font-weight: 700;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;

      &.actived {
        max-height: initial;
      }
    }
  }

  .item-time {
    display: block;

    span {
      @include font-size(12);
      font-weight: 300;
      color: $light_text;
      pointer-events: none;
      user-select: none;
    }
  }

  &.selected {
    .file-item {
      background: $light_background;
    }
  }

  &.locked {
    .folder figure {
      background-position-x: -257px;
    }

    .item-name span {
      text-decoration: none;
    }
  }

  .file-item {
    border: 2px dashed transparent;
    width: 165px;
    margin: 0 auto;
    cursor: pointer;
    padding-bottom: 20px;
    position: relative;

    &.is-dragenter {
      border: 2px dashed $theme;
      border-radius: 8px;
    }

    &:hover,
    &.is-clicked {
      border-radius: 8px;
      background: #f4f5f8;
    }
  }

  .icon-item {
    padding-top: 25px;
    position: relative;

    .file-link {
      display: block;
    }

    .file-icon {
      path {
        fill: #fafafc;
        stroke: #dfe0e8;
        stroke-width: 1;
      }
    }

    &.file {
      .file-icon-text {
        margin: 0 auto;
        position: absolute;
        text-align: center;
        top: 55%;
        left: 0;
        right: 0;
        color: $theme;
        font-weight: 600;
        user-select: none;
        max-width: 35px;
        max-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    &.image {
      img {
        max-width: 95%;
        object-fit: cover;
        user-select: none;
        height: 93px;
        border-radius: 5px;
      }
    }

    /deep/ svg {
      @include font-size(86);

      path {
        fill: $theme;
      }
    }
  }
}
</style>
