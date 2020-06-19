<template>
  <button class="button-base" :class="buttonStyle" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: ['buttonStyle']
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
  padding: 8px 24px;

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
