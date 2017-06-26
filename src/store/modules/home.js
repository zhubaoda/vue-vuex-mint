const state = {
    arr: [{
        title: '火遁',
        url_nor: '/static/icon/index.png',
        url: '/static/icon/1.png',
        show: true,
        router: '/home/index'
    }, {
        title: '土遁',
        url_nor: '/static/icon/resource.png',
        url: '/static/icon/2.png',
        show: false,
        router: '/home/resource'
    }, {
        title: '水遁',
        url_nor: '/static/icon/buys.png',
        url: '/static/icon/1.png',
        show: false,
        router: '/home/need'
    }, {
        title: '风遁',
        url_nor: '/static/icon/mine.png',
        url: '/static/icon/2.png',
        show: false,
        router: '/home/mine'
    }]
}

const getters = {
    arr: state => state.arr
}

const actions = {
    getIndex({ commit, state }, index) {
        return new Promise((resolve, reject) => {
            commit('getIndex', index)
        })
    },
    itsIndex({ commit, state }){
        return new Promise((resolve, reject) => {
            commit('itsIndex')
        })
    }
}

const mutations = {
    getIndex(state, index) {
        let _self = this;
        for (var i = 0; i < state.arr.length; i++) {
            state.arr[i].show = false;
        }
        state.arr[index].show = true;
    },
    itsIndex(state){
        let _self = this;
        for (var i = 0; i < state.arr.length; i++) {
            state.arr[i].show = false;
        }
        state.arr[0].show = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
