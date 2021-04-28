Vue.component('props', {
    //props: ['name', 'surname'],
    props: {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validator: value => {
                if (value < 18) {
                    console.warn("is a younger man...");
                    return false;
                }
                return true;
            }
        }
    },
    template: `
        <div>
            <h2>Props with Vuejs</h2>
            <p> {{ name }} {{ surname}}, {{age}}</p>
        </div>
    `
});