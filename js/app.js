var $title = $('.title');

(function titleFormat() {
	
	function inline() {
		if($(window).width() > 768){
			$title.css({"max-width" : "10em"})
		}
		else{
			$title.css({"max-width" : "20em"})
		}
	};
	inline();
	
	$( window ).resize(function() {
		inline();
	});
})();
