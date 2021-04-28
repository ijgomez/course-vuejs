Vue.component('emit', {
    data () {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>emit events</h2>
            <p @click="$emit('carbrand', carBrand)">Click here for emit a event to root</p>
        </div>
    `
});