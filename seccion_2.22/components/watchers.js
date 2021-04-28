Vue.component('watchers', {
    data () {
        return {
            user: null,
            oldUser: null
        };
    },
    mounted () {
       // this.randomUser()
    },
    methods: {
        async randomUser () {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0]
                console.log(user);

                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`
            } catch (e) {
                // error
            }
            
            
        }
    },
    watch: {
        user (newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2>Watcher</h2>
            <button @click="randomUser">RANDOM USER</button>
            <p>new user: {{ user }}</p>
            <p>old user: {{ oldUser }}</p>
        </div>
    `
});