<template>
  <div class="clearfix">
    <vs-input
      v-validate="'required|alpha_dash|min:3'"
      data-vv-validate-on="blur"
      label-placeholder="Name"
      name="username"
      placeholder="username"
      v-model="username"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>
    <vs-button  type="border" to="/auth/login" class="mt-6">Login</vs-button>
    <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">Register</vs-button>
  </div>
</template>

<script>
import axios from 'axios'
import notify from '@/helpers/Notifications'
export default {
  data () {
    return {
      username: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.username !== '' && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true
    }
  },
  methods: {
    registerUserJWt () {
      // If form is not validated or user is already login return
      if (!this.validateForm) return
      // Loading
      this.$vs.loading()

      // make a form
      const form = {
        username: this.username,
        password: this.password,
        type: 'PERSON'
      }
      // Do 
      console.log(window)
      axios.post(TrusthubUser.registerApi, form) 
        .then(res => {
          notify.customSuccess(this.$vs, 'Your new account has been created')
          this.$vs.loading.close()
        }).catch(() => {
          notify.customError(this.$vs, 'Error to create an account')
          this.$vs.loading.close()
        })
    }
  }
}
</script>
