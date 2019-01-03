var linhKienModule = (function($) {
	return {
				hello: function() {
					console.log("Hello World");
				},
				clickEvent: function() {
					$('.item').off('click').on('click', function(event){
						if ($(this).hasClass('selected')) {
							$(this).removeClass('selected')
						}
						else {($(this).addClass('selected'))
						}
					})
				}
			}
})(jQuery);

