<template>
  <svg :height="height" viewBox="0 0 402 200" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <rect fill-opacity="0" :stroke="color" rx="28" id="svg_1" height="232.047812" width="270.999975" y="32.453125" x="16.500005" stroke-width="15" fill="#0fff3f"/>
  <rect :stroke="color" rx="1" id="svg_5" height="14" width="201.999997" y="88.453125" x="50.499994" fill-opacity="null" stroke-opacity="null" stroke-width="20" fill="none"/>
  <rect :stroke="color" rx="1" id="svg_8" height="14" width="201.999997" y="141.453125" x="50.499994" fill-opacity="null" stroke-opacity="null" stroke-width="20" fill="none"/>
  <rect :stroke="color" rx="1" id="svg_9" height="14" width="201.999997" y="196.453125" x="50.499994" fill-opacity="null" stroke-opacity="null" stroke-width="20" fill="none"/>
 </g>
</svg>
</template>

<script>
export default {
  props:['color', 'height']
}
</script>

<style>

</style>