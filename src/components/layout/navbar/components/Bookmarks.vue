<template>
  <div class="navbar-bookmarks flex items-center">
    <!-- Main Actions -->
    <ul class="vx-navbar__starred-pages dev-contain-leftbtns">
      <li>
        <vx-tooltip text="Identification" position="bottom" delay=".3s">
          <img class="dev-icon" src="@/assets/images/trusthub/id.png" alt="dni icon" />
        </vx-tooltip>
      </li>
      <li>
        <vx-tooltip text="Face" position="bottom" delay=".3s">
          <img src="@/assets/images/trusthub/face.png" class="dev-icon" alt="Face icon" />
        </vx-tooltip>
      </li>
      <li>
        <vx-tooltip text="Fingerprint" position="bottom" delay=".3s">
          <img class="dev-icon" src="@/assets/images/trusthub/fingerprint.png" alt="Fingerprint icon" />
        </vx-tooltip>
      </li>
      <li>
        <vx-tooltip text="Voice" position="bottom" delay=".3s">
          <img class="dev-icon" src="@/assets/images/trusthub/voice.png" alt="Voice icon" />
        </vx-tooltip>
      </li>
    </ul>
    <!-- Status Life Proof  -->
    <section class="dev-lifeproof">
      <p>Life Proof: Yes</p>
      <p>Confidence: 100%</p>
    </section>

    <!-- STARRED PAGES MORE -->
    <div class="vx-navbar__starred-pages--more-dropdown" v-if="starredPagesMore.length">
      <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="cursor-pointer p-2"></feather-icon>
        <vs-dropdown-menu>
          <ul class="vx-navbar__starred-pages-more--list">
            <draggable v-model="starredPagesMore" :group="{name: 'pinList'}" class="cursor-move">
              <li
                class="starred-page--more flex items-center cursor-pointer"
                v-for="page in starredPagesMore"
                :key="page.url"
                @click="$router.push(page.url).catch(() => {})"
              >
                <feather-icon
                  class="ml-2 mr-1"
                  :icon="page.icon"
                  :svgClasses="['h-5 w-5 stroke-current', textColor]"
                ></feather-icon>
                <span class="px-2 pt-2 pb-1">{{ page.title }}</span>
              </li>
            </draggable>
          </ul>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>

    <div class="bookmark-container">
      <div
        v-click-outside="outside"
        class="absolute bookmark-list w-1/3 xl:w-1/4 mt-4"
        v-if="showBookmarkPagesDropdown"
      >
        <vx-auto-suggest
          ref="bookmarkAutoSuggest"
          :autoFocus="true"
          :data="navbarSearchAndPinList"
          :initalData="{pages: starredPagesLimited.concat(starredPagesMore)}"
          :searchLimit="5"
          placeholder="Explore Vuexy..."
          inputClassses="w-full"
          show-action
          show-pinned
          hideGroupTitle
          background-overlay
          @input="hnd_search_query_update"
          @selected="selected"
        >
          <!-- Pages Suggestion -->
          <template v-slot:pages="{ suggestion }">
            <div class="flex items-center justify-between">
              <div class="flex items-end leading-none py-1">
                <feather-icon :icon="suggestion.icon" svgClasses="h-5 w-5" class="mr-4" />
                <span class="mt-1">{{ suggestion.title }}</span>
              </div>
              <feather-icon
                icon="StarIcon"
                :svgClasses="[{'text-warning': suggestion.is_bookmarked}, 'h-5 w-5 stroke-current mt-1']"
                @click.stop="actionClicked(suggestion)"
              />
            </div>
          </template>
        </vx-auto-suggest>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import VxAutoSuggest from '@/components/vx/vx-auto-suggest/VxAutoSuggest.vue'

export default {
  props: {
    navbarColor: {
      type: String,
      default: '#fff'
    }
  },
  components: {
    draggable,
    VxAutoSuggest
  },
  data () {
    return {
      showBookmarkPagesDropdown: false
    }
  },
  watch: {
    $route () {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
    }
  },
  computed: {
    navbarSearchAndPinList () {
      return { pages: this.$store.state.navbarSearchAndPinList['pages'] }
    },
    starredPages () {
      return this.$store.state.starredPages
    },
    starredPagesLimited: {
      get () {
        return this.starredPages.slice(0, 10)
      },
      set (list) {
        this.$store.dispatch('arrangeStarredPagesLimited', list)
      }
    },
    starredPagesMore: {
      get () {
        return this.starredPages.slice(10)
      },
      set (list) {
        this.$store.dispatch('arrangeStarredPagesMore', list)
      }
    },
    textColor () {
      return {
        'text-white':
          this.$store.state.mainLayoutType === 'vertical' &&
          this.navbarColor !==
            (this.$store.state.theme === 'dark' ? '#10163a' : '#fff')
      }
    }
  },
  methods: {
    selected (obj) {
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', false)
      this.showBookmarkPagesDropdown = false
      this.$router.push(obj.pages.url).catch(() => {})
    },
    actionClicked (item) {
      this.$store.dispatch('updateStarredPage', {
        url: item.url,
        val: !item.is_bookmarked
      })
      // this.$refs.bookmarkAutoSuggest.filterData()
    },
    outside () {
      this.showBookmarkPagesDropdown = false
    },
    hnd_search_query_update (query) {
      // Show overlay if any character is entered
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', !!query)
    }
  },
  directives: {
    'click-outside': {
      bind (el, binding) {
        const bubble = binding.modifiers.bubble
        const handler = e => {
          /* eslint-disable no-mixed-operators */
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            /* eslint-enable no-mixed-operators */
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler
        document.addEventListener('click', handler)
      },

      unbind (el) {
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      }
    }
  }
}
</script>
