$(function() {
    //显示隐藏
    $('.head-nav').hover(function() {
        $('.detail').show()
    }, function() {
        $('.detail').hide()
    });
    $('.detail').mouseover(function() {
        $(this).show()
    });
    $('.detail').mouseout(function() {
        $(this).hide()
    });
    //轮播图
    function animate(obj, target, callback) {
        clearInterval(obj.timer)
        obj.timer = setInterval(() => {
            //缓动动画原理，就是每次移动的距离是变化的
            var step = (target - obj.offsetLeft) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer)
                if (callback) {
                    callback()
                }
            } else {
                obj.style.left = obj.offsetLeft + step + 'px'
            }
        }, 15);
    }
    var promo = document.querySelector('.promo')
    var ul = promo.querySelector('ul')
    var spans = promo.querySelectorAll('span')
    var w = promo.offsetWidth
    for (var i = 0; i < spans.length; i++) {
        spans[i].setAttribute('index', i)
        spans[i].onmouseover = function() {
            for (var i = 0; i < spans.length; i++) {
                spans[i].className = ''
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            num = index
            round = index
            animate(ul, -index * w)
            clearInterval(timer)
        }
        spans[i].onmouseout = function() {
            timer = setInterval(rigth, 2000);
        }
    }
    var num = 0
    var round = 0
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)

    function rigth() {
        if (num == ul.children.length - 1) {
            num = 0
            ul.style.left = 0
        }
        num++
        round++
        if (round == ul.children.length - 1) {
            round = 0
        }
        animate(ul, -num * w)
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = ''
        }
        spans[round].className = 'current'
    }
    var timer = setInterval(rigth, 2000);
    //news模块
    var newAs = document.querySelectorAll('.news-tab a')
    var newUl = document.querySelectorAll('.news-content ul')
    for (var i = 0; i < newAs.length; i++) {
        newAs[i].setAttribute('index', i)
        newAs[i].onmouseover = function() {
            for (var i = 0; i < newAs.length; i++) {
                newAs[i].className = ''
            }
            this.className = 'selected'
            var index = this.getAttribute('index')
            for (var i = 0; i < newUl.length; i++) {
                newUl[i].style.display = 'none'
            }
            newUl[index].style.display = 'block'
        }
    }
    //头部广告
    $(window).scroll(function() {
        $('.comm-topact').stop().animate({
            height: 360
        })
        $('.small-img').stop().fadeIn()
        $('.big-img').stop().fadeOut(function() {
            $(window).off('scroll')
        })
    });
    //英雄资料
    var partTabTitle = document.querySelector('.part-title');
    var lis = partTabTitle.querySelectorAll('li');
    var nones = document.querySelectorAll('.none');
    // for循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('idx', i);

        lis[i].onclick = function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            // 留下我自己 
            this.className = 'selected';

            // Step1: 隐藏所有
            for (var i = 0; i < nones.length; i++) {
                nones[i].style.display = 'none';
            }
            // Step2: 显示自己
            var idx = this.getAttribute('idx');
            console.log(idx)
            nones[idx].style.display = 'block';
        }
    }
    // 左边
})