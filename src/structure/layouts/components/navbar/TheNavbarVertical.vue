<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <!-- Dynamic Nav Bar Color  -->
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon
          class="sm:inline-flex xl:hidden cursor-pointer p-2"
          icon="MenuIcon"
          @click.stop="showSidebar"
        />

        <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" />

        <vs-spacer />

        <div class="dev-contain-rightbtns">
          <!-- Translation Btn -->
          <i18n />
          <!-- Search Btn -->
          <search-bar />
          <!-- Email Btn -->
          <vx-tooltip text="Mail" position="bottom" delay=".3s">
            <feather-icon
              svgClasses="h-6 w-6 stroke-current"
              class="p-2 cursor-pointer"
              icon="MailIcon"
            />
          </vx-tooltip>
          <!-- Notification Btn -->
          <notification-drop-down />
          <!-- Profile Avatar -->
          <div class="dev-contain-avatars">
            <profile-drop-down />
            <template v-if="isOperator">
              <div class="dev-should-operator">
                <div class="text-right leading-tight hidden sm:block">
                  <p class="font-semibold">Unidentified</p>
                  <small class="text-capitalize">Guest</small>
                </div>
                <img
                  key="onlineImg"
                  src="@/assets/images/profile/user-uploads/user-04.jpg"
                  alt="user-img"
                  width="40"
                  height="40"
                  class="rounded-full ml-3 shadow-md cursor-pointer block"
                />
                <img
                  src="@/assets/images/trusthub/menu-w.png"
                  class="dev-pointer ml-5"
                  width="25"
                  alt="menu icon"
                  @click="rightslide = true"
                />
                <dev-right-slide @closeMe="rightslide = false" :active="rightslide"></dev-right-slide>
              </div>
            </template>
          </div>
        </div>
      </vs-navbar>
    </div>
  </div>
</template>


<script>
import Bookmarks from './components/Bookmarks.vue'
import I18n from './components/I18n.vue'
import SearchBar from './components/SearchBar.vue'
import CartDropDown from './components/CartDropDown.vue'
import NotificationDropDown from './components/NotificationDropDown.vue'
import ProfileDropDown from './components/ProfileDropDown.vue'
import DevRightSlide from './components/Rightslide.vue'

export default {
  name: 'the-navbar-vertical',
  props: {
    navbarColor: {
      type: String,
      default: '#fff'
    },
    isOperator: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Bookmarks,
    I18n,
    SearchBar,
    CartDropDown,
    NotificationDropDown,
    ProfileDropDown,
    DevRightSlide
  },
  data:() => ({
    rightslide: false
  }),
  computed: {
    navbarColorLocal () {
      return this.$store.state.theme === 'dark' && this.navbarColor === '#fff'
        ? '#409FFF'
        : this.navbarColor
    },
    verticalNavMenuWidth () {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor () {
      return {
        'text-white':
          (this.navbarColor !== '#409FFF' &&
            this.$store.state.theme === 'dark') ||
          (this.navbarColor !== '#fff' && this.$store.state.theme !== 'dark')
      }
    },
    windowWidth () {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj () {
      if (this.verticalNavMenuWidth === 'default') return 'navbar-default'
      else if (this.verticalNavMenuWidth === 'reduced') return 'navbar-reduced'
      else if (this.verticalNavMenuWidth) return 'navbar-full'
    }
  },
  methods: {
    showSidebar () {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
    }
  }
}
</script>

