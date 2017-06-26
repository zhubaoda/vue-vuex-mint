import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


let routes = [{
    path: '*',
    component: resolve => require(['../views/home.vue'], resolve),
    children: [{
        path: '/home/index',
        component: resolve => require(['../views/home/index.vue'], resolve)
    }, {
        path: '/home/need',
        component: resolve => require(['../views/home/need.vue'], resolve)
    },{
        path: '/home/resource',
        component: resolve => require(['../views/home/resource.vue'], resolve)
    },{
        path: '/home/mine',
        component: resolve => require(['../views/home/mine.vue'], resolve)
    }]

}]


var router = new Router({
    mode: 'history',//把#去掉
    //hashbang: true,
    // history: true,
    saveScrollPosition: true,
    // suppressTransitionError: true,
    //linkActiveClass: "myactive",
    routes: routes
});

export default router;
