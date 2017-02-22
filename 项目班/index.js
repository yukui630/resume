requirejs.config({
	baseUrl:'',
	path:{
		src:'./src'
	}
})
requirejs(['src/Carousel'],function(Carousel) {
	Carousel.init($('.carousel'));
});
requirejs(['src/goTop']);