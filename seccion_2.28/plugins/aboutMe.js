const AboutMe = {
    install: (Vue, options) =>  {
        const {job} = options;
        Vue.prototype.$me = (name, age) =>  {
            return `My name is ${name}, ${age} years and my jobs is ${job}`;
        };
    }
}

Vue.use(AboutMe, {
    job: 'developer and instructor'
});