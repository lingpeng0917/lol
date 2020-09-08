$(function() {
    // 新英雄
    $('.new-yx-one').mouseover(function() {
        $('.inner-hover').show()
    })
    $('.new-yx-one').mouseout(function() {
            $('.inner-hover').hide()
        })
        // 新皮肤
    $('.new-yx-two').mouseover(function() {
        $('.new-yx-two .innerhover-out').show()
        $('.more-skin').stop().slideDown()

    })
    $('.new-yx-two').mouseout(function() {
            $('.new-yx-two .innerhover-out').hide()
            $('.more-skin').stop().slideUp()

        })
        // 开发者
    $('.club-developer').mouseover(function() {
        $('.club-developer .innerhover-border').show()
    })
    $('.club-developer').mouseout(function() {
            $('.club-developer .innerhover-border').hide()
        })
        // 周免
    $('.week-free').mouseover(function() {
        $('.week-free-hover').show()
    })
    $('.week-free').mouseout(function() {
            $('.week-free-hover').hide()
        })
        // 版本更新
    $('.new-version').mouseover(function() {
        $('.new-version .innerhover-out').show()
    })
    $('.new-version').mouseout(function() {
            $('.new-version .innerhover-out').hide()
        })
        // 热门活动
    $('.part-tab-title').on('mouseover', 'li', function() {
            $(this).css({
                color: '#1da6ba',
                fontWeight: 700
            }).siblings().css({
                color: '#676767',
                fontWeight: 400
            })
            $('.m-act-list>#actList').eq($(this).index()).show().siblings().hide()

            $(this).find('img').stop().fadeIn()
            $(this).siblings().find('img').stop().fadeOut()
        })
        //热门活动
    $('.act-item').hover(function() {
        $(this).find('.innerhover-border').show()
    }, function() {
        $(this).find('.innerhover-border').hide()
    })


})