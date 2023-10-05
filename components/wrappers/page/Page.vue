<template>
    <div class="page">
        <h1 class="page-title">
            <slot name="title">
            {{pageTitle}}
            </slot>
        </h1>
        <slot/>
    </div>
</template>

<script>

export default {
    name: 'Page',
    props: {
        pageTitle: {
            type: String,
            default: ''
        }
    }
}
</script>