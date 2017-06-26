<style lang="less">
.mint-loadmore-top span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
}

.mint-loadmore-bottom span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
}

.resource .mint-loadmore {
    overflow: visible;
}

.resource {
    background-image: url('/static/icon/4444.jpg');
    background-position: 0 0;
    background-size: auto 100%;
    overflow-y: scroll;
    height:100vh;
    .list {
        padding-bottom: 80px;
        padding-top: 10px;
        .title {
            width: 100%;
            img {
                width: 100%;
            }
        }
        .listitem {
            padding: 5px 10px;
            display: flex;
            flex-direction: row;
            text-align: left;
            font-size: 14px;
            line-height: 20px;
            .title_orange {
                color: #fa6705;
            }
            .title_blue {
                color: #468C00;
            }
            .left {
                padding-top: 4px;
                img {
                    width: 20px;
                }
                margin-right:8px;
            }
        }
    }
}
</style>
<template>
    <div class="resource" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <ul class="list">
                <li class="title">
                    <img src="/static/icon/loadTop.png">
                </li>
                <li v-for="(todo,index) in list" class="listitem" @click="jump(todo.url)">
                    <div class="left">
                        <img src="/static/icon/eye.png">
                    </div>
                    <div v-bind:class="{title_blue:index%2==1,'title_orange':index%2==0}">{{todo.title,35 | filterTxt}}</div>
                </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
            </div>
        </mt-loadmore>
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
                scrollTop: 0,
                show: true,
                topStatus: '',
                wrapperHeight: 0,
                allLoaded: false,
                bottomStatus: '',
            }
        },
        methods: {
            getHttp() {
                let _self = this;
                var data = [];
                _self.$http.get('/static/data/resourceList.json').then((suc) => {
                    _self.$store.dispatch('getList', suc.body);
                }).catch((err) => {
                    common.$emit('message', 'sorry,加载错误~~')
                })
            },
            getMore(back) {
                let _self = this;
                _self.$http.get('/static/data/loadMore.json').then((suc) => {
                    //data = suc.body;
                    console.log(12,suc.body)
                    _self.$store.dispatch('getLoadMore', suc.body);
                    if (back) {
                        back()
                    }
                }).catch((err) => {
                    common.$emit('message', 'sorry,加载错误~~')
                    if (back) {
                        back()
                    }
                })
            },
            handleScroll() {
                this.scrollTop = this.$refs.wrapper.scrollTop;
            },
            getScrollTop() {
                this.$refs.wrapper.scrollTop = this.scrollTop;
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadTop(id) {
                let _self = this;
                setTimeout(() => {
                    this.getMore(function() {
                        _self.$refs.loadmore.onTopLoaded(id);
                    })
                }, 500);
            },
            jump(url) {
                window.location.href = url;
            }
        },
        computed: {
            list() {
                return this.$store.state.resource.list;
            },
            loadMore() {
                return this.$store.state.resource.loadMore;
            }
        },
        watch: {
            '$route': 'getScrollTop'
        },
        created() {
            this.getHttp();
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
