Vue.component('child-data', {
    data() {
        return {
            cmpName: 'Child data CMP'
        };
    },
    template: `
        <div>
            <h2>Access data from component root</h2>
        </div>
    `
});