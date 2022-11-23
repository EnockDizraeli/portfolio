requirejs.config({
    paths: {
        'Dexie': '../thirdParty/dexie.min',
        'moment': '../thirdParty/moment.min',
        'Fuse': '../thirdParty/fuse.min',
    },
    waitSeconds: 0
});

require(['text','components/navigation', 'components/heroSection','components/aboutSection',
'components/servicesSection','components/projectsSection','components/contactSection'],
(text, navigation, heroSection, aboutSection, servicesSection, projectsSection, contactSection) => {
    let app;
    
    app = new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        components: {
            navigation,
            heroSection,
            aboutSection,
            servicesSection,
            projectsSection,
            contactSection
        },
        methods: {
            removePreloader(){
                document.body.removeChild(
                    document.getElementById('preloader')
                );
            }
        },
        mounted() {
            this.removePreloader();
        },
    });
});