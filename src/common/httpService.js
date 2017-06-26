import Vue from 'vue'


let httpService = new Vue({
    methods: {
        cart(url,suc,err) {
            this.$http.get(url).then((response) => {
                suc()
            }, (response) => {
                err()
            });
        },
        
    }
})



export default httpService;
