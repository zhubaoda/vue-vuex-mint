<style lang="less" scoped>
.index {
    .swiper {
        height: 205px;
        img{
            width:100%;
            min-height:205px
        }
    }
}
</style>
<template>
    <div class="index">
        <div class="swiper">
            <mt-swipe :auto="4000" :prevent="false">
                <mt-swipe-item v-for="(todo,index) in arr">
                    <img v-bind:src="todo.url">
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                arr: [{
                    url: '/static/icon/1.jpg'
                }, {
                    url: '/static/icon/2.jpg'
                }, {
                    url: '/static/icon/3.jpg'
                }, {
                    url: '/static/icon/4.jpg'
                }]
            }
        },
        methods: {

        },
        created() {
            let _self = this;

        }

}
</script>
