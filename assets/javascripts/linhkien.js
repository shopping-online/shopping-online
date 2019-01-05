var linhKienModule = (function($) {
		function hello() {
			console.log("Hello World");
		}

		function clickEvent() {

			$('.item').off('click').on('click', function(event){
				var value = parseInt($('.counter').attr('data-value'));
				if ($(this).hasClass('selected')) {
					$(this).removeClass('selected');
					value --;
				}
				else {($(this).addClass('selected'));
					value ++;
				}
				$('.counter').attr('data-value', value);
				$('.counter').text(value);
			})

		}

		function hoverEventIn() {
			$('.item').off('mouseover').on('mouseover', function(event) {
				$(this).addClass('hover');
			})
		}

		function hoverEventOut() {
			$('.item').off('mouseout').on('mouseout', function(event) {
				$(this).removeClass('hover');
			})
		}

	return {
		initialize: function() {
			clickEvent();
			hoverEventIn();
			hoverEventOut();
								}
			}
})(jQuery);



