<template>
    <div id="app">
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            transitionName: ''
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length;
            let cont = Math.ceil(Math.random() * 10);
            console.log(toDepth,fromDepth)
            this.transitionName = cont % 2 === 0 ? 'slide-right' : 'slide-left';
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all .2s
}

.slide-right-enter {
    transform: translate(-100%, 0);
}

.slide-right-leave-active {
    transform: translate(100%, 0);
}

.slide-left-enter {
    transform: translate(100%, 0);
}

.slide-left-leave-active {
    transform: translate(-100%, 0);
}
</style>
