let myMixin = {
    mounted () {
        console.log('Mixin init');
        console.log(this.mixinData);
        this.test();
    },
    data () {
        return {
            mixinData: 'Mixin Data'
        }
    }, 
    methods: {
        test () {
            console.log('test from mixin');
        }
    }
}

Vue.component('mixins', {
    mixins: [myMixin],
    mounted () {
        console.log('Mixin from component');
    },
    template: `
        <div>
            <h2>Using Mixins</h2>
            <p>{{ mixinData }}</p>
        </div>
    `
});