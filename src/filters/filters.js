import Vue from 'vue'

//过滤文字长度
Vue.filter('filterTxt', function(txt, num) {
    if (txt && txt.length > num && num && num != 0) {
        return txt.substring(0, num) + '...';
    } else {
        return txt
    }
})
