new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        messageUpdated: false
    },
    methods: {
        changeMessage: function() {
            this.message = 'Hi';
            this.messageUpdated = true;
        }
    }
});