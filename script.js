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



	$(window).scroll(function() {
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
				
					lBottom.width(70+(250/distance));

					iBottom.width(24+(250/distance));

					nBottom.width(15+(250/distance));

					eBottom.width(80+(250/distance));
				
				if(distance < 425) {
					eTopFill.width(eTopFill.width()-8);
				}

				if(distance < 250) {
					eMiddleFill.width(eMiddleFill.width()-8);
				}

				//reset horizontal lines if at top of screen
				if(distance == 0) {
					bottomSegment.width(150);
					topFill.width(0);
				}
			}

			currentPos = distance;
	})
});



