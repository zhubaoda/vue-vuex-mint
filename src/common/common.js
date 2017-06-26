import Vue from 'vue'
import { Indicator, Toast, MessageBox, DatetimePicker } from 'mint-ui'
let common = new Vue({

    data: {}
})
// common.$on('message', message => {
//     if (!message) {
//         return;
//     }
//     Toast({
//         message: message,
//         duration: 2000
//     });
// })

// common.$on('confirm', (obj) => {
//     MessageBox.confirm(obj.message, obj.title).then(action => {
//         obj.ensure();
//     }, action => {

//     })
// })

export default common;