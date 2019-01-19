var linhKienModule = (function($) {
        function hello() {
            console.log('Hello World');
        }

        function clickEvent() {
            $('.productBox').off('click').on('click', function(event) {
                var daChon = parseInt($('.counter').attr('da-chon'));
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    daChon --;
                } else {
                    $(this).addClass('selected');
                    daChon ++;
                }

                $('.counter').attr('da-chon', daChon);
                
                if(daChon == 0) {
                    $('.counter').addClass('d-none');
                }
                else {
                    $('.counter').removeClass('d-none')
                }
                
                // can chinh gio hang ve giua
                if(daChon == 0) {
                    $('.cartIcon1').removeClass('cartIcon');
                }
                else {
                    $('.cartIcon1').addClass('cartIcon')
                }
                
                if(daChon > 9) {
                    daChon = "9+";
                }
                    
                $('.counter').text(daChon);
            })
        }

        // function hoverEvent() {
        //     $('.productBox').hover(function() {
        //         // hoverin
        //         // if ($(this).hasClass('hover')) {
        //         //     $(this).removeClass('hover');
        //         // }
        //         // else {
        //             $(this).addClass('hover');
        //         // }
        //     }, function() {
        //         // hoverout
        //         $(this).removeClass('hover');
        //     });
        // }

        function onHoverIn() {
            $('.productBox').off('mousemover').on('mouseover', function(event) {
                $(this).addClass('hover');
            });
        }

        function onHoverOut() {
            $('.productBox').off('mouseout').on('mouseout', function(event) {
                $(this).removeClass('hover');
            });
        }

return {
        initialize: function() {
            clickEvent();
            // hoverEvent();
            onHoverIn();
            onHoverOut()
        }
    }    
})(jQuery);
