<template>
  <div id="viewusertruhub">
    <UserView :api="api" :token="getToken" />
  </div>
</template>

<script>
import UserView from '@/components/pages/usermanage/user-list/UserList.vue'
export default {
  data:() => ({
    api: HubApi.users
  }),
  components: {
    UserView
  },
  computed: {
    getToken () {
      return this.$store.state.userLogged.token
    }
  }
}
</script>

<style>

</style>