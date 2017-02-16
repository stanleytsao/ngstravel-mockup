'use strict';

var $title = $('.title');
var $pages = $('.pages');
var $slider = $('.slider');

(function headerFormat() {

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
})();

var $main = $('#main');
var source = "pages/main.html";

function render() {
	$main.empty();
	$.ajax({
		url: source,
		success: function success(data) {
			$main.append(data);
		},
		dataType: 'html'
	});
};
render();

var $navButtons = $('.pager').find('a');
var $headButtons = $('.nav').find('a');

$navButtons.click(function () {
	source = "pages/" + undefined.id + ".html";
	render();
});

$headButtons.click(function () {
	source = "pages/" + undefined.className + ".html";
	render();
});
