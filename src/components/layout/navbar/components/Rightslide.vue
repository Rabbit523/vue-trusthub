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
      <vs-button
        class="close"
        radius
        color="danger"
        @click="$emit('closeMe')"
        icon="close"
      ></vs-button>
    </div>
    <!-- Header Shadow -->
    <div class="shadow-bottom" v-show="showShadowBottom" />
    <component
      :is="scrollbarTag"
      ref="verticalNavMenuPs"
      class="scroll-area-v-nav-menu pt-2"
      :settings="settings"
      @ps-scroll-y="psSectionScroll"
      @scroll="psSectionScroll"
      :key="$vs.rtl"
    >
      <vs-collapse id="contentbodyside">
        <vs-collapse-item class="bodyside">
          <div slot="header" class="boxside">
            <img src="@/assets/images/trusthub/rightside/id-b.png" />
            <div>
              <h3>Document Identity</h3>
              <p>Scanned Document Informations</p>
            </div>
          </div>
                    <div class="boxside">
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/larrow.png" />
            <img class="this" width="250" src="@/assets/images/trusthub/rightside/user/id.png" />
            <img class="this dev-arrow ml-3" src="@/assets/images/trusthub/rightside/rarrow.png" />
          </div>
        </vs-collapse-item>

        <vs-collapse-item class="bodyside">
          <div slot="header" class="boxside">
            <img src="@/assets/images/trusthub/rightside/face-b.png" class="dev-icon" />
            <div>
              <h3>Face Recognition</h3>
              <p>Scanned Document Informations</p>
            </div>
          </div>
          <div class="boxside">
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/larrow.png" />
            <img class="this" width="250" src="@/assets/images/trusthub/rightside/user/person.png" />
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/rarrow.png" />
          </div>
        </vs-collapse-item>

        <vs-collapse-item class="bodyside">
          <div slot="header" class="boxside">
            <img src="@/assets/images/trusthub/rightside/fingerprint-b.png" />
            <div>
              <h3>Fingerprint Scan</h3>
              <p>Captured Fingerprint Information</p>
            </div>

          </div>
          <div class="boxside">
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/larrow.png" />
            <img class="this" width="250" src="@/assets/images/trusthub/rightside/user/finger.png" />
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/rarrow.png" />
          </div>
        </vs-collapse-item>

        <vs-collapse-item class="bodyside">
          <div slot="header" class="boxside">
            <img src="@/assets/images/trusthub/rightside/graph-b.png" />
            <div>
              <h3>Digital Signature</h3>
              <p>Graphometric Signature Information</p>
            </div>
          </div>
           <div class="boxside">
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/larrow.png" />
            <img class="this" width="250" src="@/assets/images/trusthub/rightside/user/signiuture.png" />
            <img class="this dev-arrow mr-3" src="@/assets/images/trusthub/rightside/rarrow.png" />
          </div>
        </vs-collapse-item>

        <vs-collapse-item class="bodyside">
          <div slot="header" class="boxside">
            <img src="@/assets/images/trusthub/rightside/voice-b.png" />
            <div>
              <h3>Voice Recorded</h3>
              <p>Registered Voice Frequency</p>
            </div>
          </div>
          <voice-record />
        </vs-collapse-item>
      </vs-collapse>
    </component>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VoiceRecord from './VoiceRecord'
export default {
  props: ['active'],
  data () {
    return {
      settings: {
        // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      showShadowBottom: false
    }
  },
  components: {
    VuePerfectScrollbar,
    VoiceRecord
  },
  computed: {
    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    }
  },
  methods: {
    psSectionScroll () {
      const scroll_el =
        this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    }
  }
}
</script>
<style lang="scss" scoped>

#contentbodyside {
  padding: 0 !important;
}
.shadow-bottom {
  position: absolute;
  z-index: 2;
  height: 60px;
  width: 100%;
  pointer-events: none;
  margin-top: -1.3rem;
  filter: blur(5px);
  background: linear-gradient(
    rgb(255, 255, 255) 41%,
    rgba(255, 255, 255, 0.11) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}
.scroll-area-v-nav-menu {
  position: relative;
  margin: auto;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 80px);
  &:not(.ps) {
    overflow-y: auto;
  }

  > .vs-sidebar-group {
    padding: 0 15px;
  }

  > .vs-sidebar--item {
    padding: 0 15px;
  }
}
</style>
