'use strict';

var $title = $('.title');
var $pages = $('.pages');
var $slider = $('.slider');

function headerFormat() {

	function resize() {
		if ($(window).width() > 991) {
			$title.css({ "max-width": "10em" });
			$pages.css({ "margin-top": "50px" });
			$pages.find('a').css({ "padding": "20px 30px 5px", "display": "inline-block" });
			$slider.css({ "margin-top": "-46px" });
		} else if ($(window).width() > 767) {
			$title.css({ "max-width": "10em" });
			$pages.css({ "margin-top": "50px" });
			$pages.find('a').css({ "padding": "20px 15px 5px", "display": "inline-block" });
			$slider.css({ "margin-top": "-46px" });
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

function loadIncludes() {
	$.ajax({
		url: "includes/header.html",
		success: function success(data) {
			$('body').prepend(data);headerFormat();
		},
		dataType: 'html'
	});
	$.ajax({
		url: "includes/footer.html",
		success: function success(data) {
			$('body').append(data);
		},
		dataType: 'html'
	});
	$.ajax({
		url: "includes/ads.html",
		success: function success(data) {
			$('#ads').append(data);
		},
		dataType: 'html'
	});
};
loadIncludes();

var $pages = $('#pages');
var source = "pages/main.js";

function render() {
	$pages.empty();
	$.ajax({
		url: source,
		success: function success(data) {
			$pages.append(data);
		},
		dataType: 'html'
	});
};
render();

var $navButtons = $('.pager').find('a');
var $headButtons = $('.nav').find('a');

$navButtons.click(function (event) {
	console.log(undefined);
	source = "pages/" + undefined.id + ".js";
	render();
});

$headButtons.click(function () {
	source = "pages/" + undefined.className + ".js";
	render();
});
