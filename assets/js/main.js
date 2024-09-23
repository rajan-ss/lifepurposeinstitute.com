(function ($) {

	$(document).ready(function () {
		function initBgCover(context) {
			if (!context) context = $("body")
			context.find(".js-has-bg-cover").each(function () {
				var holder = $(this)
				var image = holder.find("> img").hide()
				var imageSrc = image.prop("src")
				holder.css({
					backgroundImage: "url(" + imageSrc + ")",
				})
			})
		}

		initBgCover();

		/* smooth scroll*/
		var winWidth = $(window).width()
		$(' a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var target = $(this.hash)
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
				if (target.length) {
					if (winWidth > 1) {
						$("html, body").animate(
							{
								scrollTop: target.offset().top - 150,
							},
							1000
						)
					} else {
						$("html, body").animate(
							{
								scrollTop: target.offset().top,
							},
							1000
						)
					}
					return false
				}
			}
		})

		/*Testimonial Slider*/
		var swiper = new Swiper(".testimonialSwiper", {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 25,
				},
				1028: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
			},
		});

		// New script for stick footer
		//sticky-footer
		function stickyFooter() {
			let stickyFooter = $('.sticky-footer')
			let stickyFooterHeight = stickyFooter.innerHeight()
			let siteFooter = $('.site-footer')
			siteFooter.css('margin-bottom', stickyFooterHeight)
		}
		stickyFooter()

		function handleResize() {
			if ($(window).width() < 768) {
				stickyFooter();
			} else {
				$('.site-footer').css('margin-bottom', ''); // Reset margin-bottom if width is 768 or more
			}
		}
		handleResize()
		let debounceTimeout
		$(window).on('resize', function () {
			clearTimeout(debounceTimeout);
			debounceTimeout = setTimeout(handleResize, 250);
		})

		/* Update margin top by calculating header height */
		function updateMarginTop() {
			var headerHeight = $('header').innerHeight();
			$('.headerSpace').css('margin-top', headerHeight + 'px');
		}

		$(document).ready(updateMarginTop);
		$(window).resize(updateMarginTop);
		/* End of the code block  */
	})

}(jQuery));