$(function () {
    // 判断是否点击同意
    $('.agree input').change(function () {
        // 如果input选中
        if ($('.agree input').prop('checked') == true) {
            // 警告框隐藏
            $('.left_footer span').hide()
            // 右边付款页面显示
            $('.right').css('display', 'block')
            // 如果没有选中
        } else if ($('.agree input').prop('checked') == false) {
            // 警告框显示
            $('.left_footer span').show()
            // 右边付款页面隐藏
            $('.right').css('display', 'none')
        }
    })


    
    // 金额的选择
    $('.amount_item').on('click', function () {
        $(this).css('border-color', '#3387ef').siblings().css('border-color', '#ccc')
        $(this).children('i').show()
        $(this).siblings().children('i').hide()


        // 前三固定金额赋值给下面的支付页面
        var p = $(this).find('em').html()
        $('.price_ss').html(p * 0.97)
        $('.bankpay .btn em').html(p)


        // 其他金额输入框如果没有输入内容，提示警示框
        $('.amount_item input').blur(function () {
            if ($(this).val() == '') {
                $(this).parents('.amount_item-top').siblings('p').show()
            }
            if ($(this).val() % 100 !== 0) {
                $(this).val(100)
                $('.other_amount').html(1)
                $('.price_ss').html(($('.other_amount').html() * 0.97).toFixed(2))
                $('.bankpay .btn em').html($('.other_amount').html())

            }
        })
        $('.amount_item input').focus(function () {
            $(this).parents('.amount_item-top').siblings('p').hide()
        })



        // 当我们选择前三个金额框时，警告栏隐藏
        $('.amount').children().eq(0).click(function () {
            $('.amount').find('.warn_num').hide()
        })
        $('.amount').children().eq(1).click(function () {
            $('.amount').find('.warn_num').hide()
        })
        $('.amount').children().eq(2).click(function () {
            $('.amount').find('.warn_num').hide()
        })




        // 当处于第三个框时，判断
        if ($(this).index() == 3) {
            // 点击其他金额框，input自动获取焦点
            $(this).find('input').focus()
            // 当处于第三个框时，提示框显示
            $(this).siblings('.warn').show()
        } else {
            $(this).siblings('.warn').hide()
        }
    })



    // 其它金额的转化
    $('.amount_item input').on('input', function () {

        if ($(this).val() > 100000) {
            var num = $(this).val(100000)
            $('.other_amount').html(1000)
        } else {
            var num = $(this).val()
            $('.other_amount').html(num / 100)
        }
        // 输入框金额赋值给下面
        $('.price_ss').html(($('.other_amount').html() * 0.97).toFixed(2))
        $('.bankpay .btn em').html($('.other_amount').html())


    })


    // 支付方式的选择
    $('.choice').on('click', function () {
        $(this).css('border-color', '#3387ef').siblings().css('border-color', '#ccc')
        $(this).children('i').show()
        $(this).siblings().children('i').hide()
        // 得到当前choice的索引号
        var index = $(this).index()
        $(".pay_area-body").children().eq(index).show().siblings().hide();
    })

    $('.bank_list ul li').on('click', function () {
        $(this).css({
            'border-color': '#3387ef',
            'z-index': '999'
        }).siblings().css({
            'border-color': '#ccc',
            'z-index': '1'
        })
    })
})