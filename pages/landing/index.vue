<template>
    <Landing />
</template>

<script>
import Landing from '~/components/landing/Landing.vue';

export default {
    name: 'LandingPage',
    components: {
        Landing,
    },
    head() {
        return {
            title: 'Landing Page',
        }
    },
};
</script>

<style lang="scss">
</style>
