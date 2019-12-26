export default {
    methods: {
        scrollTo(elementToGo) {
            $('html, body').animate({
                scrollTop: $(elementToGo).offset().top
            }, 500);
        }
    },
}
