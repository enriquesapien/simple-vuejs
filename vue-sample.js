
// Defining a Vue component
Vue.component('app-username', {
    data: function() {
        return {
            username: 'Juan Perez'
        }
    }, 
    template: '<p>{{ username }}</p>'
}); // static method



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


new Vue({
    el: '#app2',
    data: {
        message: 'Hello from 2nd instance'
    }
});