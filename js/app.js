var $title = $('.title');
var $pages = $('.pages');
var $slider = $('.slider');

function headerFormat() {
	
	function resize() {
		if ($(window).width() > 991){
			$title.css({"max-width" : "10em"});
			$pages.css({"margin-top" : "50px"});
			$pages.find('a').css({"padding" : "20px 30px 5px" , "display" : "inline-block"});
			$slider.css({"margin-top" : "-46px"})
		}
		else if ($(window).width() > 767){
			$title.css({"max-width" : "10em"});
			$pages.css({"margin-top" : "50px"});
			$pages.find('a').css({"padding" : "20px 15px 5px" , "display" : "inline-block"});
			$slider.css({"margin-top" : "-46px"})
		}
		else{
			$title.css({"max-width" : "20em"});
			$pages.css({"margin-top" : "30px"});
			$pages.find('a').css({"display" : "none"});
			$slider.css({"margin-top" : "20px"})
		}
	};
	resize();

	$( window ).resize(function() {
		resize();
	});

};

function loadIncludes() {
	$.ajax({
	    url: "includes/header.html",
	    success: function (data) { $('body').prepend(data); headerFormat()},
	    dataType: 'html'
	});
	$.ajax({
	    url: "includes/footer.html",
	    success: function (data) { $('body').append(data); },
	    dataType: 'html'
	});
	$.ajax({
	    url: "includes/ads.html",
	    success: function (data) { $('#ads').append(data); },
	    dataType: 'html'
	});
};
loadIncludes();



var $pages = $('#pages');
var source = "pages/main.js"

function render() {
	$pages.empty();
	$.ajax({
	    url: source,
	    success: function (data) { $pages.append(data); },
	    dataType: 'html'
	});
};
render();

var $navButtons = $('.pager').find('a');
var $headButtons = $('.nav').find('a');

$navButtons.click( event => {
	console.log(this);
	source = "pages/" + this.id + ".js"
	render();
});

$headButtons.click( () => {
	source = "pages/" + this.className + ".js"
	render();
})



