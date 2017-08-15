(function ($) {
	$(document).ready(function () {

		/* menu visiable js start */

		$(".menu-appander").click(function () {
			$(".mega-menu").addClass("menupop");
			$(this).css("opacity", "0");
		})
		$(".menu-cross").click(function () {
			$(".mega-menu").removeClass("menupop");
			$(".menu-appander").css("opacity", "1");
		})
		/* menu visiable js end */

		/* src box pop up js start */
		$(".search-icon").click(function () {
			$(".search-box").addClass("srcpop");
			$(this).css("opacity", "0");
		})
		$(".src-hidden").click(function () {
			$(".search-box").removeClass("srcpop");
			$(".search-icon").css("opacity", "1");
		})
		/* src box pop up js end */

		// slider_carousel js start
		$('#slider_carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})
		// slider_carousel js end

		//wow js start
		wow = new WOW(
			{
				animateClass: 'animated',
				offset: 100,
				callback: function (box) {
					console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
				}
			}
		);
		wow.init();
		//wow js stop





	});
})(jQuery);