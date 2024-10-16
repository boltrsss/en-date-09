$(document).ready(function() {
    function scroll() {
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    }
    setTimeout(scroll, 2500);

    var $main = $('.wrapper');
    $('.step-btn').not('.submit-btn').on('click', function() {
        $main.addClass('reverseAnim');
        setTimeout(function() {
            $main.toggleClass('toggleDirection');
            $main.removeClass('reverseAnim');
            $('.step-item:visible').removeClass('visible').next().addClass('visible');
            $('.slider-item.active').removeClass('active').next().addClass('active');
            $('.slider-item.preload').next().addClass('preload');
        }, 1000);
        setTimeout(function() {
            scroll();
        }, 2500);
    });

    $('.checkbox-item').on('click', function() {
        if ($(this).siblings('.checked').length < 3) {
            $(this).toggleClass('checked tr-selected');
        } else {
            $(this).addClass('checkbox-item-error');
            setTimeout(function() {
                $(this).removeClass('checkbox-item-error');
            }.bind(this), 300);
        }
    });
});
