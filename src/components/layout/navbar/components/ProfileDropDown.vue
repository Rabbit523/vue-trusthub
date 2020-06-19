<template>
  <div class="the-navbar__user-meta flex items-center" v-if="userLogged.username">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ userLogged.username | capitalize }}</p>
      <small class="text-capitalize">{{userLogged.type | capitalize }}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <!-- <img v-if="userLogged.user.photoURL" key="onlineImg" :src="userLogged.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" /> -->
        <img src="@/assets/images/profile/user-uploads/user-02.jpg" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  computed: {
    userLogged () {
      return this.$store.state.userLogged.user
    }
  },
  methods: {
    logout () {
      TrusthubUser.logOut()
    }
  }
}
</script>
