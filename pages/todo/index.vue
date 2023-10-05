<template>
    <Page page-title="Todo page">
        <ul>
            <li v-for="todo in todos" :key="todo.text">
                <input :checked="todo.completed" @change="toggle(todo)" type="checkbox">
                <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
            </li>
            <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
        </ul>
    </Page>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import Page from '~/components/wrappers/page/Page.vue'

export default {
    name: 'TodoPage',
    components: {
        Page
    },
    computed: {
        ...mapGetters({
            todos: 'todo/list'
        }),
    },
    mounted() {
        this.fetchTodos()
    },
    methods: {
        addTodo(e) {
            this.$store.commit('todo/add', e.target.value)
            e.target.value = ''
        },
        ...mapMutations({
            toggle: 'todo/toggle',
        }),
        ...mapActions({
            fetchTodos: 'todo/fetchList'
        })
    }
}
</script>

<style>
.completed {
    text-decoration: line-through;
}
</style>