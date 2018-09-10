new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        messageUpdated: false,
        elements: []
    },
    methods: {
        changeMessage: function() {
            this.message = 'Hi';
            this.messageUpdated = true;
        },
        addNewElement: function() {
            this.elements.push(this.elements.length + 1);
        },
        getColor: function(number) {
            return number % 2 == 0 ? 'green' : 'red';
        }
    }
});