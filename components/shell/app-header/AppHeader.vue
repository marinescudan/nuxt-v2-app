<template>
    <cv-header>
        <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
        <cv-header-name to="/" prefix="APP">&nbsp;NUXT&nbsp;Frontend</cv-header-name>
        <cv-header-nav>
            <cv-header-menu-item :to="'/'">Home</cv-header-menu-item>
            <cv-header-menu-item :to="'/todo'">Todo</cv-header-menu-item>
            <cv-header-menu-item :to="'/repos'">Repos</cv-header-menu-item>
            <cv-header-menu-item :to="'/landing'">Landing</cv-header-menu-item>
        </cv-header-nav>
    </cv-header>
</template>

<script>

export default {
    name: 'AppHeader'
}
</script>