$(document).ready(function () {
	$(".home-carousel").owlCarousel({
		loop: false,
		margin: 0,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	$(".scrollContent").mCustomScrollbar();

	$(".about-modal-btn").click(function () {
		$(".about-modal").show();
	});

	$(".modelClose").click(function () {
		$(".mainModal").hide();
	});

	$(".productSlider").owlCarousel({
		loop: false,
		margin: 30,
		dots: false,

		nav: false,
		responsive: {
			0: {
				items: 1,
				stagePadding: 50,
				loop: true,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
				stagePadding: 10,
			},
		},
	});

	$("#grid3").mediaBoxes({
		filterContainer: "#filter",
		lazyLoad: false,
		columns: 3,
		boxesToLoadStart: 3,
		boxesToLoad: 6,
		horizontalSpaceBetweenBoxes: 30,
		verticalSpaceBetweenBoxes: 30,
		minBoxesPerFilter: 3,
		resolutions: [
			{
				maxWidth: 960,
				columnWidth: "auto",
				columns: 3,
			},
			{
				maxWidth: 650,
				columnWidth: "auto",
				columns: 1,
			},
			{
				maxWidth: 450,
				columnWidth: "auto",
				columns: 1,
			},
		],
	});
});
