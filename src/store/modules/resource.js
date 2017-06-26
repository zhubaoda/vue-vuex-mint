const state = {
    list: [],
    loadMore: []
}

const getters = {
    list: state => state.list,
    loadMore: sate => state.loadMore
}

const actions = {
    getList({ commit, state }, data) {
        return new Promise((resolve, reject) => {
            commit('getList', data)
        })
    },
    getLoadMore({ commit, state }, data) {
        return new Promise((resolve, reject) => {
            commit('getLoadMore', data);
            console.log(123123)
        })
    },
}

const mutations = {
    getList(state, data) {
        state.list = [];
        if (data) {
            for (let i = 0; i < data.length; i++) {
                state.list.push(data[i]);
            }
        }
    },
    getLoadMore(state, data) {
        for (let i = 0; i < data.length; i++) {
            state.list.unshift(data[i]);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
