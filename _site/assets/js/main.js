/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a.scrolly');

			// Scrolly-fy links.
				if($nav_a.scrolly()){
					$nav_a
						.scrolly()
						.on('click', function(e) {

							var t = $(this),
								href = t.attr('href');

							if (href[0] != '#')
								return;

							e.preventDefault();

							// Clear active and lock scrollzer until scrolling has stopped
								$nav_a
									.removeClass('active')
									.addClass('scrollzer-locked');

							// Set this link to active
								t.addClass('active');

						});
				}

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery); */

$(document).ready(function(){
	function imagesProgress(){
		var $container = $("#progress"),
			$progressBar = $container.find(".progress-bar"),
			$progressText = $container.find(".progress-text"),
			imgLoad = imagesLoaded("body"),	
			imgTotal = imgLoad.images.length,	
			imgLoaded = 0,										
			current = 0,							
			progressTimer = setInterval(updateProgress, 1000 / 60);
		
		imgLoad.on("progress", function(){
			imgLoaded++;
		});
	
		function updateProgress(){
			var target = ( imgLoaded / imgTotal) * 100;
			
			current += ( target - current) * 0.1;
			$progressText.text( Math.floor(current) + '%' );
			
			if(current >= 100){
				clearInterval(progressTimer);
				$container.addClass("progress-complete");
				$progressBar.add($progressText)
					.delay(500)
					.animate({opacity: 0},250,function(){
						$container.animate({top: '-100%'},1000,'easeInOutQuint');
					});
				$("body").addClass("active");
			}
			if(current > 99.9){
				current = 100;
			}
			
		}	
	}

	imagesProgress();
});
