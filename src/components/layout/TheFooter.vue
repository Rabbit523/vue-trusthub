<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <p>
          <span>COPYRIGHT &copy;</span>
          <span>{{ new Date().getFullYear() }} </span>
          <a href="#" target="_blank" rel="nofollow">Gurucube </a>
          <span class="hidden sm:inline-block">  S.A. All rights Reserved</span>
        </p>
        <span class="md:flex hidden items-center">
            <span>{{whatIsClock}}</span>
        </span>
    </footer>
</template>

<script>
export default {
  name: 'the-footer',
  props: {
    classes: {
      type: String
    }
  },
  computed: {
    whatIsClock () {
      const date = new Date
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const strTime = `${hours  }:${  minutes  }`
      return strTime
    }
  }
}
</script>
