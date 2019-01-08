var linhKienModule = (function($) {
		function hello() {
			console.log("Hello World");
		}

		function showHideShoppingIcon(count) {
			if (count == 0) {
				$('.counter').addClass('d-none');
			}
			else {
				$('.counter').removeClass('d-none')
			}
		}

		function updateShoppingCount(value) {
			if (value > 9) {
					value = "9+"
				}

				$('.counter').text(value);
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

				showHideShoppingIcon(value);
				updateShoppingCount(value);	

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



