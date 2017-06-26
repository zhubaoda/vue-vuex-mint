<style lang="less" scoped>
.mine {
    .box {
        padding-bottom: 80px;
        overflow-y: scroll;
        height: 100vh;
    }
    .top,
    .bottom,
    .login,
    .loadIos,
    .android,
    .h5 {
        margin: 0;
        border: 0;
        padding: 0;
        img {
            width: 100%;
            margin: 0;
            border: 0;
            padding: 0;
        }
    }
    video {
        border: 1px solid #7FFF00;
        margin: 0;
    }
}
</style>
<template>
    <div class="mine" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="box">
            <div class="top">
                <img src="/static/icon/vedio.png">
            </div>
            <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=14796&editionType=normal&source=ucloud" controls="controls" width="100%">
                your browser does not support the video tag
            </video>
            <div class="bottom">
                <img src="/static/icon/bottom.png">
            </div>
            <div class="login" @click="jumpH5">
                <img src="/static/icon/login.png">
            </div>
            <div class="loadIos" @click="jumpApp">
                <img src="/static/icon/ios.png">
            </div>
            <div class="android" @click="jumpApp">
                <img src="/static/icon/android.png">
            </div>
            <div class="h5" @click="jumpH5">
                <img src="/static/icon/h5.png">
            </div>
        </div>
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
                wrapperHeight: 0
            }
        },
        methods: {
            handleScroll() {
                this.scrollTop = this.$refs.wrapper.scrollTop;
            },
            getScrollTop() {
                this.$refs.wrapper.scrollTop = this.scrollTop;
            },
            jumpApp() {
                 window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.yaocaimaimai.yaocaimaimai';
            },
            jumpH5(){
                window.location.href = 'http://apps.yaocaimaimai.com/htm5'
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
