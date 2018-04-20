// ----------------------------------------
// Travelon: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Make language selector invisible on scrolling down
	// ------------------------------

	$('#main').on('scroll', function () {
		var scrollTop = $('#main').scrollTop();

		if (scrollTop > 50) {
			$('.language-selector').addClass('language-selector--hide');
		} else {
			$('.language-selector').removeClass('language-selector--hide');
		}
	});
});