Vue.component('loops', {
    data () {
        return {
            frameworks: [
                { id: 1, name: 'VueJS'},
                { id: 2, name: 'ReactJS'},
                { id: 3, name: 'Ember'},
                { id: 4, name: 'AdonisJS'},
                { id: 5, name: 'Angular'},
                { id: 6, name: 'Laravel'}
            ]
        };
    },
    template: `
        <div>
            <h2>loops</h2>
            <ul v-if="frameworks.length">
                <li v-for="framework in frameworks" :key="framework.id">
                    {{ framework.name }}
                </li>
            </ul>
            <ul v-if="frameworks.length">
                <li v-for="(framework, index) in frameworks" :key="framework.id">
                    ({{ index }}) | {{ framework.name }}
                </li>
            </ul>
        </div>
    `
});