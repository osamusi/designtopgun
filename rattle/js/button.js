//$(function() {
//    var topBtn = $('#page-top');    
//    topBtn.hide();
//    //スクロールが100に達したらボタン表示
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 100) {
//            topBtn.fadeIn();
//        } else {
//            topBtn.fadeOut();
//        }
//    });
//    //スクロールしてトップ
//    topBtn.click(function () {
//        $('body,html').animate({
//            scrollTop: 0
//        }, 500);
//        return false;
//    });
//});



$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-140px');
    var showFlag = false;
    //スクロールが140に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-140px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

