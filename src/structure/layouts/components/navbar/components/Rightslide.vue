<template>
  <vs-sidebar
    id="dev-rightslide"
    parent="body"
    default-index="1"
    position-right
    hidden-background
    color="primary"
    class="sidebarx items-no-padding"
    spacer
    :value="active"
  >
    <div class="header-sidebar" slot="header">
      <div>
        <h3>BIOMETRIC DATA</h3>
        <p>Central ABIS Stored Information</p>
      </div>
      <vs-button class="close" radius color="danger" @click="$emit('closeMe')" icon="close"></vs-button>
    </div>
    <div class="bodyside">
      <div class="boxside boxborder">
        <img src="@/assets/images/trusthub/DNI-b.png" />
        <div>
          <h3>Document Identity</h3>
          <p>Scanned Document Informations</p>
        </div>
      </div>
      <div class="boxside">
        <img src="@/assets/images/trusthub/face-b.png" />
        <div>
          <h3>Face Recognition</h3>
          <p>Scanned Document Informations</p>
        </div>
      </div>
      <div class="boxside boxborder">
        <img src="@/assets/images/trusthub/larrow-b.png" />
        <img width="250" src="@/assets/images/trusthub/personface.png" />
        <img src="@/assets/images/trusthub/rarrow-b.png" />
      </div>
      <div class="boxside boxborder">
        <img src="@/assets/images/trusthub/finger-b.png" />
        <div>
          <h3>Fingerprint Scan</h3>
          <p>Captured Fingerprint Information</p>
        </div>
      </div>
      <div class="boxside boxborder">
        <img src="@/assets/images/trusthub/graph-b.png" />
        <div>
          <h3>Digital Signature</h3>
          <p>Graphometric Signature Information</p>
        </div>
      </div>
      <div class="boxside">
        <img src="@/assets/images/trusthub/voice-b.png" />
        <div>
          <h3>Voice Recorded</h3>
          <p>Registered Voice Frequency</p>
        </div>
      </div>
    </div>
  </vs-sidebar>
</template>

<script>
export default {
  props: ['active']
}
</script>