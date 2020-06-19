<template>
  <div id="dashboardhome">
    <dashboard-analytics> </dashboard-analytics>
  </div>
</template>

<script>
import Analytics from '@/components/pages/dashboard/Analytics.vue'
export default {
  components: {
    'dashboard-analytics' : Analytics
  }
}
</script>

<style>

</style>