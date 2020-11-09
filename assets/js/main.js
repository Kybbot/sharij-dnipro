let images = document.querySelectorAll('.lazy');
lazyload(images);

const scrollToTop = () => {
	// Let's set a variable for the number of pixels we are from the top of the document.
	const c = document.documentElement.scrollTop || document.body.scrollTop;

	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		// ScrollTo takes an x and a y coordinate.
		// Increase the '20' value to get a smoother/slower scroll!
		window.scrollTo(0, c - c / 20);
	}
};

document
	.querySelector('#top-btn')
	.addEventListener('click', function(event) {
		event.preventDefault();
		scrollToTop()
	});