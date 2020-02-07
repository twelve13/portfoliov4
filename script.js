$(document).ready(function() {
	let bottomSegment = $(".bottom-segment");
	let topFill = $(".top-fill");
	let fill = $(".fill");

	let lBottom = $("#segment-l-bottom");
	let iBottom = $("#segment-i-bottom");
	let nBottom = $("#segment-n-bottom");
	let eBottom = $("#segment-e-bottom");

	let eMiddleFill = $("#segment-e-middle .top-fill");
	let eTopFill = $("#segment-e-top .top-fill");

	let currentPos = 0;
	let startingDistance = $(window).scrollTop();

	function debounce(func, wait = 10, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	

	fill.height(startingDistance/3);

	bottomSegment.width(150-startingDistance);

	if(startingDistance > 350) {
		eTopFill.width((.75*startingDistance)-230);
	}

	if(startingDistance > 190) {
		eMiddleFill.width((.25*startingDistance)-25);
	}

	lBottom.width(70+(250/startingDistance));

	iBottom.width(60+(250/startingDistance));

	nBottom.width(15+(250/startingDistance));

	eBottom.width(80+(250/startingDistance));



	const fillLetters = function() {
			let distance = $(window).scrollTop();

			fill.height(distance/3);

			//scrolling down
			if (distance > currentPos) {
				
				bottomSegment.width(150-distance);

				if(distance > 425) {
					eTopFill.width((.6*distance)-230);
				}

				if(distance > 250) {
					eMiddleFill.width((.25*distance)-25);
				}

			//scrolling up
			} else {
					lBottom.width(lBottom.width()+(100/distance));

					iBottom.width(iBottom.width()+(100/distance));

					nBottom.width(nBottom.width()+(100/distance));

					eBottom.width(eBottom.width()+(100/distance));
				
				if(distance < 625) {
					eTopFill.width(eTopFill.width()-8);
				}

				if(distance < 400) {
					eMiddleFill.width(eMiddleFill.width()-8);
				}

				//reset horizontal lines if at top of screen
				if(distance == 0) {
					bottomSegment.width(150);
					topFill.width(0);
				}
			}

			currentPos = distance;
	}

	$(window).scroll(debounce(fillLetters));
});



