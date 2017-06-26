<style lang="less" scoped>
.home {
    overflow: hidden;
    height: 100vh;
    background-color: #F6F6F6;
    .footer {
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        .box {
            flex: 1;
            padding: 5px 0 5px 0px;
            .word_nor {
                color: #9B9B9B;
                font-size: 12px;
                margin-top: 3px;
            }
            img {
                width: 23px;
                height: 23px;
            }
            .img {
                width: 25px;
                height: 25px;
            }
            .word {
                color: #FAB805;
                font-size: 14px;
                margin-top: 1px;
            }
        }
    }
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all .2s
}



.slide-left-enter {
    transform: translate(100%, 0);
}

.slide-left-leave-active {
    transform: translate(60%, 0);
}
</style>
<template>
    <div class="home">
        <transition name="slide-left" mode="out-in">
            <router-view></router-view>
        </transition>
        <div class="footer">
            <div class="box" v-for="(todo,index) in arr" @click="select(todo)">
                <img :src="todo.url" v-if='!todo.show'>
                <img :src="todo.url" class="img" v-if='todo.show'>
                <div class="word_nor" v-if='!todo.show'>{{todo.title}}</div>
                <div class="word" v-if='todo.show'>{{todo.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
            return {
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
        },
        // watch: {
        //     '$route' (to, from) {
        //         const toDepth = to.path.split('/').length
        //         const fromDepth = from.path.split('/').length;
        //         let cont = Math.ceil(Math.random() * 10);
        //         console.log(toDepth, fromDepth)
        //         this.transitionName = cont % 2 === 0 ? 'rollInRight' : 'rollInRight';
        //     }
        // },
        methods: {
            select(todo) {
                let _self = this;
                for (var i = 0; i < _self.arr.length; i++) {
                    _self.arr[i].show = false;
                }
                todo.show = true;
                _self.$router.push(todo.router);
            }
        },
        created() {
            this.$router.push('/home/index');
        }

}
</script>
