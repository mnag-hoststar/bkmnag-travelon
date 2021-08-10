// ----------------------------------------
// Travelon: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Make language selector invisible on scrolling down
	// ------------------------------

	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();

		console.log(scrollTop);

		if (scrollTop > 50) {
			$('.language-selector').addClass('language-selector--hide');
			$('a.pull').addClass('nav-scrolled');
		} else {
			$('.language-selector').removeClass('language-selector--hide');
			$('a.pull').removeClass('nav-scrolled');
		}
	});
});