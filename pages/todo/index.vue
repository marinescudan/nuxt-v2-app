<template>
    <Page page-title="Todo page">
        <Todo />
    </Page>
</template>

<script>
import Page from '~/components/wrappers/page/Page.vue'
import Todo from '~/components/todo/Todo.vue'

export default {
    name: 'TodoPage',
    components: {
        Page,
        Todo
    },

}
</script>

<style>

</style>