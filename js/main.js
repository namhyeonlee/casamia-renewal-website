$(function () {
    $(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
});
//category slidup/down
    $(".menu").mouseover(function () {
        $(".category").slideDown(400);
    })
    $(".category").mouseleave(function () {
        $(".category").slideUp(400);
      })
    
//category menu
    $(".category__menu>ul>li").hover(function () {
        var categoryOrder = $(this).index();
        $(this).css("text-decoration", "underline")
            .siblings().css("text-decoration","none");
        $(".category__sub>ul").eq(categoryOrder)
            .fadeIn(100).siblings("ul").fadeOut(100);
         $(".category__imgs>div").eq(categoryOrder)
            .fadeIn(100).siblings("div").fadeOut(100);
    })    
    

//mobile nav slide
    $(".mobileNavBtn").click(function () {
        $(".mobileNav").stop().animate({
            "margin-left": 0
        },1200)
    })
    $(".closeBtn").click(function () {
        $(".mobileNav").stop().animate({
            "margin-left": "-100%"
        },1200)
    })
    
//mainBanner fade slide
    
    $(".circleBtn>li").click(function () {
        var circleOrder = $(this).index();
      
        $(this).addClass("active").siblings("li").removeClass("active");
    
        $(".bannerWrap>.banner").eq(circleOrder).stop()
            .animate({ opacity: 1 }, 500)
        .siblings().stop()
            .animate({ opacity: 0 }, 500)
    });

    //auto banner
    var showBanner = 0;
    function autoBanner() {
        if (showBanner < 2) {
            showBanner++;
        } else {
            showBanner = 0;
        }
        $(".circleBtn>li").eq(showBanner).addClass("active")
            .siblings("li").removeClass("active")
        
         $(".bannerWrap>.banner").eq(showBanner).stop()
            .animate({ opacity: 1 }, 500)
        .siblings().stop()
            .animate({ opacity: 0 }, 500)
        
    }
    var timer = setInterval(autoBanner, 1500)
    
    $(".bannerWrap").mouseover(function () {
        clearInterval(timer);
    })
    $("bannerWrap").mouseout(function () {
        timer = setInterval(autoBanner,1500)
    })
    
    

//best seller btn slide
    var bestLiNum = 0;
    var bestLi = $(".products>li").lenght;
    // var objBestLi = $(".products>li").eq(0).clone();
    // $(".products").append(objBestLi);

    var bestLiWidth = $(".products>li").outerWidth();
    console.log(bestLiWidth);

    function moveBestLi() {
        $(".products").stop().animate({
            "margin-left": -bestLiWidth * bestLiNum
        },1000)
    }

    //rightbtn
    $(".bestRightBtn").click(function () { 
        if (bestLiNum == 6) {
            bestLiNum = 0;
            $(".products").css("margin-left", 0);
        }
        bestLiNum++;
        console.log(bestLiNum);
        moveBestLi();
    })
    //leftBtn
    $(".bestLeftBtn").click(function () {
        if (bestLiNum > 0) {
            bestLiNum--;
           
        }
            moveBestLi();
      })
//event hover event

    $(".eventList>li").hover(function () {
        var eventlist = $(this).index();

        $(this).addClass("active").siblings("li").removeClass("active");

        $(".events>li").eq(eventlist).fadeIn(800)
            .siblings("li").fadeOut(800);
        
        $(".eventbarslide").stop().animate({
            width: 20* (eventlist+1) + "%" 
        }, 800)
        
    })
//category
    $(".goodsTab>li").click(function () {
       
        var goodsTabOrder = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".wrap>ul").eq(goodsTabOrder).fadeIn(500).siblings().fadeOut(500);
        
    })
    
})