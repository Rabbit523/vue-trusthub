<template>
  <div>
    <vs-input
        v-validate="'required|min:3'"
        data-vv-validate-on="blur"
        name="username"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Username"
        v-model="form.username"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="form.password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="remember_me" class="mb-3">Remember Me</vs-checkbox>
        <router-link to="/auth/forgot-password">Forgot Password?</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">Register</vs-button>
      <vs-button :disabled="!validateForm" @click="loginJWT">Login</vs-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import notify from '@/helpers/Notifications'
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.form.username !== '' && this.form.password !== ''
    }
  },
  methods: {
    loginJWT () {
      // Loading
      this.$vs.loading()
      // Do 
      axios.post(TrusthubUser.loginApi, this.form) 
        .then(res => {
          TrusthubUser.setupLogin(this.$router, this.$store, res.data)
          this.$vs.loading.close()
        }).catch(() => {
          notify.customError(this.$vs, 'Wrong username or password')
          this.$vs.loading.close()
        })
    },
    registerUser () {
      this.$router.push('/auth/register').catch(() => {})
    }
  }
}

</script>

