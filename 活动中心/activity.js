$(function(){
$('.head-nav').hover(function(){
    $('.detail').show()
})
$('.detail').hover(function(){
    $(this).show()
},function(){
    $(this).hide()
})
    $('.act-type-list').on('mouseover', '.act-item', function() {
        $(this).find('.innerhover-border').show().siblings().find('.innerhover-border').hide()

    })
    $('.act-type-list').on('mouseout', '.act-item', function() {
        $(this).find('.innerhover-border').hide()
    })  
    $('.spage-tab-title li').mouseover(function(){
        $(this).css('color','#1da6ba').siblings().css('color','#676767')
        $(this).find('p').show()
        $(this).siblings().find('p').hide()
        var index=  $(this).index()
        $('.act-type-list').eq(index).show().siblings('ul').hide()
    })



     // 返回顶部开始
     $(document).scrollTop(200);
            // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
            // 页面滚动事件
            var boxTop = $(".spage-tab-title").offset().top;
            $(window).scroll(function() {
                // console.log(11);
                //console.log($(document).scrollTop());
                if ($(document).scrollTop() >= boxTop) {
                    $(".back").fadeIn();
                } else {
                    $(".back").fadeOut();
                }
            });
            // 返回顶部
            $(".back").click(function() {
                // $(document).scrollTop(0);
                $("body, html").stop().animate({
                    scrollTop: 0
                });
            })
})


   

     