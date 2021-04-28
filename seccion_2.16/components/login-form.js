Vue.component('login-form', {
    data () {
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login () {
            this.logged = this.user.email === 'test@m.com' && this.user.password === '1234';
        }
    },
    template: `
        <div>
            <h2>login form</h2>
            <p v-show="logged" style="background: green; color: #fff;">session started with {{user}} </p>
            <form @submit.prevent="login">
                <input type="email" autocomplete="off" v-model="user.email" name="email"/>
                <input type="password" v-model="user.password" name="password"/>
                <input type="submit" value="init session"/>
            </form>
        </div>
    `
});