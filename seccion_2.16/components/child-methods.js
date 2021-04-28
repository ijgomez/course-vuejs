Vue.component('child-methods', {
    data() {
        return {
            cmpName: 'Child methods CMP'
        };
    },
    methods: {
        showCmpName() {
            console.log(this.cmpName);
        }
    },
    template: `
        <div>
            <h2>Access methods from component root</h2>
        </div>
    `
});