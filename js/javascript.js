//topGameList 滑入彈出效果
$(function() {
    $("header .gameNav li,.topGameList").hover(function(){
        $(".topGameList")
        .addClass("display");

        $("header")
        .addClass("linear");

        if($(this).hasClass("sportBtn"))
        {
            $('.topGameList,.topGameList .sport')
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("liveBtn"))
        {
            $('.topGameList,.topGameList .live')
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("slotBtn"))
        {
            $('.topGameList,.topGameList .slot')
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("fishBtn"))
        {
            $('.topGameList,.topGameList .fish')
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("boardBtn"))
        {
            $('.topGameList,.topGameList .board')
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("menu") || $(this).hasClass("event") || $(this).hasClass("vip"))
        {
            $(".topGameList")
            .removeClass("display");

            $("header")
            .removeClass("linear");
        }
    })

    $("header .top").hover(function(){
        $(".topGameList")
        .removeClass("display");

        $("header")
        .removeClass("linear");
    })

    $(".topGameList").mouseleave(function(){
        $(".topGameList")
        .removeClass("display");

        $("header")
        .removeClass("linear");
    })
})

//header滑動時改變背景
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50)
        {
            $("header")
            .addClass("scroll");
        }
        else
        {
            $("header")
            .removeClass("scroll");
        }
    })
})

//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})

//underList點擊滑動
$(function(){
    var slotL = $('.listWrap .slot li').length;
    var slWP = $('.topGameList .slot ol>div');

    var n = 0;
    var pv = $(".topGameList .slot .prev");
    var nt = $(".topGameList .slot .next");

    $(pv).click(function(){
        n --;
        $(slWP).css("transform","translateX("+(-208 * n)+"px)");

        $(nt)
        .addClass("active");

        if(n == -1){
            $(slWP).css("transform","translateX(0px)");
            n ++;

            $(pv)
            .removeClass("active");
        }
    })
    $(nt).click(function(){
        n ++;
        $(slWP).css("transform","translateX("+(-208 * n)+"px)");

        $(pv)
        .addClass("active");

        if(n == slotL - 4){
            n --;

            $(nt)
            .removeClass("active");
        }
    })
})
$(function(){
    var boardL = $('.listWrap .board li').length;
    var bdWP = $('.topGameList .board ol>div');

    var n = 0;
    var pv = $(".topGameList .board .prev");
    var nt = $(".topGameList .board .next");

    $(pv).click(function(){
        n --;
        $(bdWP).css("transform","translateX("+(-208 * n)+"px)");

        $(nt)
        .addClass("active");

        if(n == -1){
            $(bdWP).css("transform","translateX(0px)");
            n ++;

            $(pv)
            .removeClass("active");
        }
    })
    $(nt).click(function(){
        n ++;
        $(bdWP).css("transform","translateX("+(-208 * n)+"px)");

        $(pv)
        .addClass("active");

        if(n == boardL - 4){
            n --;

            $(nt)
            .removeClass("active");
        }
    })
})

//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user')
        .toggleClass('display');

        $(".unlogin")
        .removeClass("unlogin");

        $(".filter,.jumpWindow.news")
        .addClass("display");

        $("header .user.alLogin .deposit a")
        .attr("href","./html/deposit.html");
        $("header .user.alLogin .transfer a")
        .attr("href","./html/transfer.html");
        $("header .user.alLogin .withdrawal a")
        .attr("href","./html/withdrawal.html");
        $("header .user.alLogin .member a")
        .attr("href","./html/member.html");
        $("header .user.alLogin .mail a")
        .attr("href","./html/mail.html");

        $(".gameNav .sportBtn")
        .find("a").attr("href","./html/sportPage.html");
        $(".gameNav .liveBtn")
        .find("a").attr("href","./html/livePage.html");
        $(".gameNav .slotBtn")
        .find("a").attr("href","./html/slotPage.html");
        $(".gameNav .fishBtn")
        .find("a").attr("href","./html/fishPage.html");
        $(".gameNav .boardBtn")
        .find("a").attr("href","./html/boardPage.html");
        $(".gameNav .event")
        .find("a").attr("href","./html/event.html");
        $(".gameNav .vip")
        .find("a").attr("href","./html/vip.html");

        $(".topGameList li")
        .addClass("openBet");

        $("footer .downList .news a")
        .addClass("openNews");
        $("footer .downList .vip a")
        .attr("href","./html/vip.html");
        $("footer .downList .help a")
        .attr("href","./html/help.html");
        $("footer .downList .agent a")
        .attr("href","./html/agent.html");
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//gameWrap小遊戲格hover切換左大圖
// $(function(){
//     $(".livePage .btnBox li").hover(function(){
//         var n = $(this).index() + 1;

//         $(".livePage .mainImg")
//         .attr("src","../images/partner/live/liveBG_"+ n +".png");
//     })
// })

//eventWrap 切換
// $(function(){
//     $('.eventBox .btnBox button').click(function(){
//         $('.eventList').removeClass('display');
//         $('.eventDetail').addClass('display');
//     })

//     $('.eventDetail .back').click(function(){
//         $('.eventList').addClass('display');
//         $('.eventDetail').removeClass('display');
//     })
// })

//slotPage
$(function(){
    $('.slotBody .nav li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })

    $('.pfName .all').click(function(){
        $('.platforms')
        .removeClass('display');
        $(this)
        .closest('.platforms').addClass('display')
        .find(".pfName").addClass("active")
        .next().addClass("active");
    })
    $('.pfName .back').click(function(){
        $('.platforms')
        .addClass('display');
        $('.pfName,.gameList')
        .removeClass('active');
    })

    $(".slotBody .love_ic").on("click",function(){
        $(this)
        .toggleClass("active");
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li').click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".memberWrap .bottom>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more,.vipWrap .back').click(function(){
        $(".vipWrap")
        .toggleClass("display");
    })
})
//.vipWrap .detailCardBox內選單滑動
$(function(){
    var vipCard = $('.detailCardBox ul');
    var cardL = $('.detailCardBox ul li').length;

    var n = 0;
    var nt = $('.detailCardBox .next');
    var pv = $('.detailCardBox .prev');

    $(nt).click(function(){
        n ++;
        $(vipCard).css("transform","translateX("+(-300 * n)+"px)");

        if(n == cardL - 1){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(vipCard).css("transform","translateX("+(-300 * n)+"px)");

        if(n == -1){
            $(vipCard).css("transform","translateX(0px)");
            n ++;
        }
    })
})

//eventApply 切換
$(function(){
    $(".eventApplyWrap .tabs li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".eventApplyWrap>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top button').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass("active");

        if($(this).index() == 0)
        {
            $('.mailWrap .bottom.active')
            .addClass('display')
            .siblings().removeClass("display");
        }
        else
        {
            $('.mailWrap .bottom.ann')
            .addClass('display')
            .siblings().removeClass("display");
        }
    })

    $('.mailWrap .active .tabs li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');

        var n = $(this).index();

        $(".mailWrap .bottom.active .list>ul:eq("+ n +")")
        .addClass("display")
        .siblings("ul").removeClass("display");
    })
    $('.mailWrap .ann .tabs li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');

        var n = $(this).index();

        $(".mailWrap .bottom.ann .list>ul:eq("+ n +")")
        .addClass("display")
        .siblings("ul").removeClass("display");
    })

    $('.mailWrap .btnBox .edit,.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox')
        .toggleClass('display');

        $(".mailWrap .list li")
        .toggleClass("editing");
    })

    $('.mailWrap.outMode .list li,.mailWrap.innerMode .title').click(function(){
        $('.mailWrap')
        .toggleClass('display');
    })
})

//dealWrap
$(function(){
    $(".dealWrap .tabs li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".dealWrap>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//point
$(function(){
    $(".pointWrap .tableWrap li:not(.title) .wordWrap p:last-child").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })
})

//betWrap
$(function(){
    $(".betWrap .tableWrap li:not(.title) .wordWrap p:last-child").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })
})

//.news切換
$(function(){
    $(".news .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".news .content ul:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//jumpWindow
$(function(){
    $(".jumpWindow .close_ic,.jumpWindow .close").on("click",function(){
        $(".filter,.jumpWindow")
        .removeClass("display");
    })

    //流水注單查詢
    $(".dealWrap .waterBox table button").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.listWindow")
        .addClass("display");
    })

    //更變手機
    $(".memberWrap .changePhone").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.phoneWindow")
        .addClass("display");
    })
    $(".phoneWindow .check").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.plsGo.forPhone")
        .addClass("display");
    })

    //更變密碼
    $(".memberWrap .changePassword button").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.passwordWindow")
        .addClass("display");
    })
    $(".passwordWindow button").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.plsGo.forPw")
        .addClass("display");
    })

    //活動彈窗
    $(".eventWrap .btnBox button").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.eventWindow")
        .addClass("display");
    })

    //投注彈窗
    $(document).on("click",".openBet",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.betWindow")
        .addClass("display");
    })

    //最新消息
    $(document).on("click",".openNews",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.news")
        .addClass("display");
    })

    //請先登入
    $(document).on("click",".unlogin",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.plsGo")
        .addClass("display");
    })
})

//helpPage
$(function(){
    $('.helpPage .nav .title').click(function(){
        $('.nav .box')
        .removeClass('display');

        $(this)
        .addClass('active')
        .siblings().removeClass('active');

        $(this).next(".box")
        .addClass('display');
    })

    $('.helpPage .nav .box li').click(function(){
        $('.nav .box li')
        .removeClass('active');

        $(this)
        .addClass('active');

        if($(this).hasClass("forNew"))
        {
            var n = $(this).index();

            $(".helpWrap .new:eq("+ n +")")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("forQues"))
        {
            var n = $(this).index();

            $(".helpWrap .ques:eq("+ n +")")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("forUs"))
        {
            var n = $(this).index();

            $(".helpWrap .us:eq("+ n +")")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//deposit切換
$(function(){
    $(".depositWrap .list li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
        $(".depositWrap .bottom .type")
        .removeClass("display");
    })

    $(".depositWrap .list .card").click(function(){
        $(".depositWrap .bottom .type.card")
        .addClass("display");
    })
    $(".depositWrap .list .vega").click(function(){
        $(".depositWrap .bottom .type.vega")
        .addClass("display");
    })

    $(".depositWrap .bottom .card .check").click(function(){
        $(".depositWrap .bottom .type.cardReady")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//checkBox
$(function(){
    $(".checkBox").on("change",function(event){
        $(this)
        .toggleClass("active");

        event.stopPropagation();
    })
})



















//filter open + close
$(function(){
    

    // $(".agentSignup").click(function(){
    //     $('.jumpWindow').removeClass('display');
    //     $('.filter,.agRegist').addClass('display');
    // })
    //同意條款checkbox
    // $(".agRegist .btnBox .readBtn").click(function(){
    //     $(this).toggleClass('active');
    // })
    // $(".agRegist .btnBox .openAGterms").click(function(){
    //     $('.agTerms').addClass('display');
    //     $(".agRegist").addClass("darkness");
    // })
    // $(".closeTerms,.close_ic.back").click(function(){
    //     $(".filter").addClass("display");
    //     $('.agTerms').removeClass('display');
    //     $(".agRegist").removeClass("darkness");
    // })
})



function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame').addClass('display');
}



function openNews(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.news').addClass('display');
}
function loading(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loading').addClass('display');

    setTimeout(function(){
        $(".filter")
        .removeClass("display");
    },2000);
}
function openAGterms(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.agTerms').addClass('display');
}























//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
    $('.transferWrap .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
})



//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop")
                .addClass("display")
        } else{
                $(".goTop")
                .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },500)
    })
})

//transfer切換
$(function(){
    $(".withdrawalWrap .bottom form select").change(function(){
        var n = $(".withdrawalWrap .bottom form select").val();

        if(n == 1) {
            $(".withdrawalWrap .bottom form.bankcard")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})



//register
$(function(){
    var phone = $(".registerWrap .phone")
    var btn = $(".registerWrap .codeBtn");

    $(phone).focus(function(){
        $(btn)
        .attr("disabled",false);
    })
    $(phone).blur(function(){
        $(btn)
        .attr("disabled",true);
    })
})
//退傭代理QA-leftArea
$(function(){
	$(".qaOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 200){
            $(".leftArea li:eq(0)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 900){
            $(".leftArea li:eq(2)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 200){
            $(".leftArea li:eq(1)")
            .addClass("active")
            .siblings().removeClass("active");
        }
	})
})
//退傭代理Rule-leftArea
$(function(){
	$(".ruleOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 100){
            $(".leftArea li:nth-of-type(1)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 6000){
            $(".leftArea li:nth-of-type(11)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5600){
            $(".leftArea li:nth-of-type(10)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5500){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5400){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".leftArea li:nth-of-type(8)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 4600){
            $(".leftArea li:nth-of-type(7)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 3400){
            $(".leftArea li:nth-of-type(6)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 2200){
            $(".leftArea li:nth-of-type(5)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 1300){
            $(".leftArea li:nth-of-type(4)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 800){
            $(".leftArea li:nth-of-type(3)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 100){
            $(".leftArea li:nth-of-type(2)")
            .addClass("active")
            .siblings().removeClass("active");
        }

        console.log(scrollVal);
	})
})

//sendBtn
$(function(){
    $(".sendBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.plsGo")
        .addClass("display");
    })
})