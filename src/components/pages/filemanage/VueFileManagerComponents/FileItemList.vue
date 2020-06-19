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
        <span v-if="isFile || isImage" class="item-size">{{ data.filesize }}, {{ data.created_at }}</span>

        <span v-if="isFolder" class="item-length">
          {{
          data.items == 0
          ? 'Empty'
          : (data.items + ' item') | pluralize(data.items)
          }}, {{ data.created_at }}
        </span>
      </div>

      <!--Go Next icon-->
      <div class="actions" v-if="$isMobile()">
        <span @click="showItemActions" class="show-actions">
          <FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon>
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
      return amount > 1 ? `${word}s` : word
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
    showItemActions () {
      this.isClicked = true

      events.$emit('mobileMenu:show')
    },
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
          `${this.data.name}.${this.data.mimetype}`
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

  &:hover {
    border-color: transparent;
  }

  .actions {
    text-align: right;
    width: 50px;

    .show-actions {
      cursor: pointer;
      padding: 12px 6px 12px;
      //opacity: .25;

      path {
        fill: $theme;
      }
    }
  }

  .item-name {
    display: block;
    margin-left: 10px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .item-size,
    .item-length {
      @include font-size(12);
      font-weight: 100;
      color: $text-muted;
      display: block;
    }

    .name {
      white-space: nowrap;
      //display: inline-block;

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

  .icon-item {
    position: relative;
    min-width: 60px;

    /deep/ svg {
      @include font-size(50);

      path {
        fill: $theme;
      }
    }

    .file-icon {
      path {
        fill: #fafafc;
        stroke: #dfe0e8;
        stroke-width: 1;
      }
    }

    &.file {
      text-align: center;

      .file-icon-text {
        top: 40%;
        @include font-size(12);
        margin: 0 auto;
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        color: $theme;
        font-weight: 600;
        user-select: none;
        max-width: 50px;
        max-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    &.image {
      img {
        object-fit: cover;
        user-select: none;
        max-width: 100%;
        border-radius: 5px;
        width: 50px;
        height: 50px;
      }
    }
  }

  .file-item {
    border: 2px dashed transparent;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 7px;

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
}
</style>
