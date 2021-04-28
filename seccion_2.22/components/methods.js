Vue.component('methods', {
    data() {
        return {
            name: 'John',
            surname: 'Smith'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello() {
            alert(this.fullName);
        }
    },
    template: `
    <div>
            <h2>Execute methods with Vuejs</h2>
            <p @click="hello">Click here for execute hello method</p>
        </div>
    `
});