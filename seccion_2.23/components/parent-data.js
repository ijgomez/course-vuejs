Vue.component('parent-data', {
    template: `
        <div>
            <h2>Access data from component parent</h2>
            <p>{{ $parent.appName }}</p>
        </div>
    `
});