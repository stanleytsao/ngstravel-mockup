'use strict';

function headerFormat() {

	var $title = $('.title');
	var $pages = $('.pages');
	var $slider = $('.slider');

	function resize() {
		if ($(window).width() > 991) {
			$title.css({ "max-width": "10em" });
			$pages.css({ "margin-top": "50px" });
			$pages.find('a').css({ "padding": "20px 30px 5px", "display": "inline-block" });
			$slider.css({ "margin-top": "-31px" });
		} else if ($(window).width() > 767) {
			$title.css({ "max-width": "10em" });
			$pages.css({ "margin-top": "50px" });
			$pages.find('a').css({ "padding": "20px 15px 5px", "display": "inline-block" });
			$slider.css({ "margin-top": "-31px" });
		} else {
			$title.css({ "max-width": "20em" });
			$pages.css({ "margin-top": "30px" });
			$pages.find('a').css({ "display": "none" });
			$slider.css({ "margin-top": "20px" });
		}
	};
	resize();

	$(window).resize(function () {
		resize();
	});
};

var $headerButtons, $navButtons;

function changeSource() {
	$headerButtons.click(function () {
		source = "pages/" + this.className + ".html";
		render();
	});
};

function loadIncludes() {
	$.ajax({
		url: "includes/header.html",
		success: function success(data) {
			$('#header').append(data);
		},
		complete: [headerFormat(), function () {
			$headerButtons = $('#header').find('a');
			changeSource();
		}],
		dataType: 'html'
	});
	$.ajax({
		url: "includes/nav.html",
		success: function success(data) {
			$('#nav').append(data);
		},
		complete: [headerFormat(), function () {
			$navButtons = $('#nav').find('a');
		}],
		dataType: 'html'
	});
	$.ajax({
		url: "includes/ads.html",
		success: function success(data) {
			$('#ads').append(data);
		},
		dataType: 'html'
	});
	$.ajax({
		url: "includes/footer.html",
		success: function success(data) {
			$('#footer').append(data);
		},
		dataType: 'html'
	});
};
loadIncludes();

var $content = $('#content');
var source = "pages/main.html";

function render() {
	$content.empty();
	$.ajax({
		url: source,
		success: function success(data) {
			$content.append(data);
		},
		dataType: 'html'
	});
};
render();
