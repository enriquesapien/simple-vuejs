
// Defining a Vue component
Vue.component('app-username', {
    props: [
        'username'
    ],
    template: '<p v-on:click="usernameClicked">{{ username }}</p>', 
    data: function() {
        return {
            // username: 'Juan Perez'
        }
    }, 
    methods: {
        usernameClicked() { // ES6 sintax
            // custom event definition
            // Vue provided methods begin with $
            this.$emit('user-clicked', this.username);
        }
    }
}); // static method


// Vue instance
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
        },
        userWasClicked: function(name) {
            alert(name);
        }
    }
});


new Vue({
    el: '#app2',
    data: {
        message: 'Hello from 2nd instance'
    }
});