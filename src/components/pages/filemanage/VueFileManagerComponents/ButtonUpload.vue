<template>
  <label :class="buttonStyle" label="file" class="button file-input button-base">
    <slot></slot>
    <input
      accept="*"
      v-show="false"
      @change="emmitFiles"
      id="file"
      type="file"
      name="files[]"
      multiple
    />
  </label>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: ['buttonStyle'],
  data () {
    return {
      files: undefined
    }
  },
  methods: {
    emmitFiles (e) {
      this.$uploadFiles(e.target.files)
    }
  }
}
</script>

<style scoped lang="scss">

.button-base {
  @include font-size(16);
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s all ease;
  border-radius: 8px;
  border: 0;
  padding: 12px 24px;

  &:active {
    transform: scale(0.95);
  }

  &.theme {
    color: white;
    background: $theme;
  }

  &.secondary {
    color: $text;
    background: $light_background;
  }
}
</style>
