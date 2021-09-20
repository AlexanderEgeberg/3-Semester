interface Person {
    firstName: string;
    lastName: string;
}
let user: Person = { firstName: "Anders", lastName: "B" };

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!', // string
        name: 'Anders',
        prime: 14593, // number
        weekdays: ['Monday', 'Tuesday', 'Wednesday'], // array of strings
        person: { firstName: "John", lastName: "Doe" }, // object
        teachers: [user, { firstName: "Jamshid", lastName: "E" }, { firstName: "Michael", lastName: "H" }],
        counter: 0,
        anotherMessage: "",
        checked: false,
        age: 0
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
            this.prime = 11
        },
        updateCounter() {
            this.counter++
        }
    }
})