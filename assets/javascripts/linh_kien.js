var linhKienModule = (function($) {
<<<<<<< HEAD
    return {
        hello: function() {
            console.log("Hello World");
        },
        clickEvent: function() {
            $('.productBox').off('click').on('click', function(event) {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                } else {
                    $(this).addClass('selected')
                }
            })
        }
    }    
})(jQuery);
=======
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

>>>>>>> 077e8b3a36028d0f36808defa386ec8a35b56440
