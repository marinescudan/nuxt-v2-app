export class Todo {
    constructor(title, completed = false) {
        this.title = title
        this.completed = completed
        this.id = Math.random(  ).toString( 36 ).substr( 2, 9 )
    }
}


export const state = () => ({
    loading: false,
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            title,
            completed: false
        })
    },
    addList(state, list) {
        state.list = list
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    },
    toggleIsLoading(state) {
        state.loading = !state.loading
    }
}

export const actions = {
    async fetchList({ commit }) {
        commit('toggleIsLoading')
        const res = await this.$axios
        .$get('https://jsonplaceholder.typicode.com/todos')
        .catch((e) => {
            console.log(e)
        })
        commit('addList', res)
        commit('toggleIsLoading')
        return res
    },
    async add({ commit }, text) {
        commit('add', text)
    },
    async remove({ commit }, todo) {
        commit('remove', { todo })
    },
    async toggle({ commit }, todo) {
        commit('toggle', todo)
    }
}

export const getters = {
    loading(state) {
        return state.loading
    },
    list(state) {
        return state.list
    }
}
