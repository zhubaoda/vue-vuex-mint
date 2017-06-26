<style lang="less" scoped>
.need {
    height: 100vh;
    overflow-y: scroll;
    .list {
        padding-bottom: 80px;
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
<template>
    <div class="need" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="list">
            <li v-for="(todo,index) in loadImgs" class="listitem">
                <img v-lazy="todo.url">
            </li>
        </ul>
    </div>
</template>
<script>
import common from '../../common/common.js'
import filters from '../../filters/filters.js'
import {
    mapGetters
} from 'vuex'
export default {
    data() {
            return {
                wrapperHeight: 0,
                loadImgs: [{
                    url: '/static/icon/lazy.png'
                }, {
                    url: '/static/icon/1.jpg'
                }, {
                    url: '/static/icon/2.jpg'
                }, {
                    url: '/static/icon/3.jpg'
                }, {
                    url: '/static/icon/4.jpg'
                }, {
                    url: '/static/icon/2.jpg'
                }, {
                    url: '/static/icon/1.jpg'
                }, {
                    url: '/static/icon/4.jpg'
                }, {
                    url: '/static/icon/4444.jpg'
                }, {
                    url: '/static/icon/list.jpg'
                }]
            }
        },
        methods: {
            handleScroll() {
                this.scrollTop = this.$refs.wrapper.scrollTop;
            },
            getScrollTop() {
                this.$refs.wrapper.scrollTop = this.scrollTop;
            }
        },
        watch: {
            '$route': 'getScrollTop'
        },
        created() {

        },
        mounted() {
            let _self = this;
            this.$refs.wrapper.addEventListener('scroll', this.handleScroll);
            this.$nextTick(function() {
                _self.wrapperHeight = document.documentElement.clientHeight - _self.$refs.wrapper.getBoundingClientRect().top;
            })
        }

}
</script>
