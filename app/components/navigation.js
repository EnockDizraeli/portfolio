define(['text!components/templates/navigation.html'],
(template) => {
    return Vue.extend({
        template,
        methods: {
            scroll(refName) {
              const element = document.getElementById(refName);
              element.scrollIntoView({ behavior: "smooth" });
            },
        }
    });
})