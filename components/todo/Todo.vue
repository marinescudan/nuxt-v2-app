<template>
    <ul class="todo-component">
        <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
        <li v-for="todo in todos" :key="todo.text">
            <input :checked="todo.completed" @change="toggle(todo)" type="checkbox">
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Todo',
    computed: {
        todos() {
            return this.$store.state.todo.list
        }
    },
    mounted() {
        this.fetchTodos()
    },
    methods: {
        addTodo() {
            this.$store.commit('todo/add', e.target.value)
            e.target.value = ''
        },
        toggle(todo) {
            this.$store.commit('todo/toggle', todo)
        },
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