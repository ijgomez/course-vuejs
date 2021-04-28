Vue.component('vmodel', {
    data () {
        return {
            framework: 'Vuejs 2'
        }
    },
    template: `
        <div>
            <h2>Working with vmodel</h2>
            <input v-model="framework" v-focus/>
            <p> The framework selected is:  {{ framework }}</p>
            
        </div>
    `
});