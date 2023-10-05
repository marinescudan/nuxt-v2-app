<template>
  <Page page-title="Home page">
    <Home/>
  </Page>
</template>

<script>
import Page from '~/components/wrappers/page/Page.vue'
import Home from '~/components/home/Home.vue'

export default {
  name: 'IndexPage',
  components: {
    Page,
    Home
  }
}
</script>

<style>
</style>