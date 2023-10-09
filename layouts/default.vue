<template>
  <div class="default-layout">
    <AppHeader />
    <cv-content id="#main-content">
      <nuxt />
    </cv-content>
  </div>
</template>
  
<script>
import AppHeader from '~/components/shell/app-header/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
  head() {
    return {
      title: 'Blank layout',
    }
  },
  computed: {},
}
</script>
  
<style>
.default-layout {
  margin-top: 40px;
  padding: 2rem;
}

@media print {}
</style>
  