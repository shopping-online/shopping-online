var linhKienModule = (function($) {
	return {
		hello: function() {
			console.log("hello world");
		},
		clickEvent: function() {
			$(".productBox").off("click").on("click", function(event) {
				console.log("dang chon");
				if ($(this).hasClass('selected')) {
				$(this).removeClass("selected");

				} else {
				$(this).addClass("selected");

				}
			})
		}
	}
})(jQuery);

