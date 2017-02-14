var $title = $('.title');
var $pages = $('.pages');

(function headerFormat() {
	
	function resize() {
		if ($(window).width() > 991){
			$title.css({"max-width" : "10em"});
			$pages.css({"margin-top" : "50px"});
			$pages.find('a').css({"padding" : "20px 40px 5px"});
			$pages.find('a').css({"display" : "inline-block"});
			$('.slider').css({"margin-top" : "-46px"})
		}
		else if ($(window).width() > 767){
			$title.css({"max-width" : "10em"});
			$pages.css({"margin-top" : "50px"});
			$pages.find('a').css({"padding" : "20px 25px 5px"});
			$pages.find('a').css({"display" : "inline-block"});
			$('.slider').css({"margin-top" : "-46px"})
		}
		else{
			$title.css({"max-width" : "20em"});
			$pages.css({"margin-top" : "30px"});
			$pages.find('a').css({"display" : "none"});
			$('.slider').css({"margin-top" : "20px"})
		}
	};
	resize();

	$( window ).resize(function() {
		resize();
	});

})();
