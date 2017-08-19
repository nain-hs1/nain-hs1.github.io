(function ($) {
	$(document).ready(function () {

		//preloader js start
		$(window).load(function () {
			$('#preloader').fadeOut('slow', function () { $(this).remove(); });
		});
		//preloader js end

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

		// Video Popup js start
		$("#videopopupl").YouTubePopUp();
		$("#videopopupl-big").YouTubePopUp();
		//video popup js end
		/* menu visiable js start */

		$(".menu-appander").click(function () {
			$(".mega-menu").toggleClass("menupop");
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
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
			$(this).toggleClass('open');
		});
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



	});
})(jQuery);
