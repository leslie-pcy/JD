// header效果
$(function () {
    // 定位效果
    $("#index-header-local").mouseenter(function () {
        $("#index-header-local-list").show();
        $(this).css({
            "background":"white"
        })
    });

    $("#index-header-local").mouseleave(function () {
        $("#index-header-local-list").hide();
        $("#index-header-local").css({
            "background":"#e3e4e5"
        })
    });

    $("#index-header-local-list li").each(function () {
        if ($("#index-header-local-city").text() == $(this).text()) {
            $(this).css({
                "background-color": "#e1251b",
                "color": "white"
            })
        }
        $(this).mouseenter(function () {
            $(this).css({
                "background-color": "#f4f4f4",
                "color": "#e1251b"
            })
        }).mouseleave(function () {
            $(this).css({
                "background-color": "#fff",
                "color": "#999"
            })

            if ($("#index-header-local-city").text() == $(this).text()) {
                $(this).css({
                    "background-color": "#e1251b",
                    "color": "white"
                }).siblings().css({
                    "background-color": "#fff",
                    "color": "#999"
                })
            }
        }).click(function () {
            $("#index-header-local-city").text($(this).text());
        })
    });

    // 下滑大菜单效果
    $("#index-header-daohang").mouseenter(function () {
        $("#index-header-daohang-list").show()
        $(this).css({
            "background":"white"
        });
    });

    $("#index-header-daohang").mouseleave(function () {
        $("#index-header-daohang-list").hide();
        $("#index-header-daohang").css({
            "background":"#e3e4e5"
        });
    });

    $("#index-header-daohang-list li").each(function () {
        $(this).mouseenter(function () {
            $(this).css({
                "color": "#e1251b"
            })
        }).mouseleave(function () {
            $(this).css({
                "color": "#999"
            })
        })
    });

    // 下滑小菜单效果
    $(".index-header-kefu").mouseenter(function () {
        $left = $(this).attr("data-left")
        $(".index-header-kefu-list").show().css({
            "left":$left
        })
        $(this).css({
            "background":"white"
        });
    });

    $(".index-header-kefu").mouseleave(function () {
        $(".index-header-kefu-list").hide();
        $(".index-header-kefu").css({
            "background":"#e3e4e5"
        });
    });

    $(".index-header-kefu-list li").each(function () {
        $(this).mouseenter(function () {
            $(this).css({
                "color": "#e1251b"
            })
        }).mouseleave(function () {
            $(this).css({
                "color": "#999"
            })
        })
    });

    // 下拉二维码
    $("#index-header-code-codelist").mouseenter(function () {
        $(".codelist").show();
    }).mouseleave(function () {
        $(".codelist").hide();
    });

    $("#logo-nav-code img").mouseover(function () {
        $(".codelist").show();
        console.log("aaa");
    })


    


});

// logo-nav效果
$(function () {
    $(".logo-nav .logo").hover(function () {
        $(this).find("img").eq(0).fadeOut()
            .next().fadeIn();
    }, function () {
        $(this).find("img").eq(1).fadeOut()
        .prev().fadeIn(); 
    })
})

// banner效果
$(function () {
    $("#index-banner-aside li").each(function () {

        $(this).mouseenter(function () {
            $("#index-banner-float").show();
        });
    })
    
    $("#index-banner-aside").mouseleave(function () {
        $("#index-banner-float").hide();
    });
    
});

// 倒计时
$(function () {
    
    function reverseTime() {
        var oDate1 = new Date();
        var oDate2 = new Date("2020-9-3 08:00:00");

        var cha = (oDate2 - oDate1) / 1000;
        cha = cha < 0 ? 0 : cha;

        var hour = Math.floor(cha / 3600);
        var minute = Math.floor(cha / 60 % 60);
        var second = Math.floor(cha % 60);

        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        $("#miaosha_hour").text(hour);
        $("#miaosha_minute").text(minute);
        $("#miaosha_second").text(second);

        if (cha <= 1) {
            clearInterval(timer);

        }
    }

    reverseTime();

    var timer = setInterval(reverseTime, 1000);
})

// 顶部悬浮
$(function () {

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if(st>=500){
            $(".fly-top-wrap").slideDown();

            $(".fly-aside").css({
                "position": "fixed",
                "top": "100px"
            }).find("#returnTop").show();

        }else{
            $(".fly-top-wrap").slideUp();

            $(".fly-aside").css({
                "position": "absolute",
                "top":"680px"
            }).find("#returnTop").hide();
        }

        $("#returnTop").click(function () {
            $("html,body").stop().animate({
                "scrollTop":0
            },800)
        })

        
    
        
    })
})

// 侧边浮动栏
$(function () {
    $(".fly-aside li:not('.line')").mouseenter(function () {
        $(this).css({
            "background": "#e1251b",
            "color":"white"
        }).siblings().not("#line").css({
            "background": "white",
            "color":"#333"
        })
    })
    $("#index-fly-miaosha").click(function () {
        $(this).css({
            "background": "#e1251b",
            "color":"white"
        }).siblings().not("#line").css({
            "background": "white",
            "color":"#333"
        })
        $("html,body").stop().animate({
            "scrollTop":$(".miaosha").offset().top - 200 + "px"
        },500)
    })

    $("#index-fly-tese").click(function () {
        $(this).css({
            "background": "#e1251b",
            "color":"white"
        }).siblings().not("#line").css({
            "background": "white",
            "color":"#333"
        })
        $("html,body").stop().animate({
            "scrollTop":$(".tejia").offset().top - 200 + "px"
        },500)
    })

    $("#index-fly-pindao").click(function () {
        $(this).css({
            "background": "#e1251b",
            "color":"white"
        }).siblings().not("#line").css({
            "background": "white",
            "color":"#999"
        })
        $("html,body").stop().animate({
            "scrollTop":$(".pindao").offset().top - 200 + "px"
        },500)
    })

    $("#index-fly-tuijian").click(function () {
        $(this).css({
            "background": "#e1251b",
            "color":"white"
        }).siblings().not("#line").css({
            "background": "white",
            "color":"#999"
        })
        $("html,body").stop().animate({
            "scrollTop":$(".tuijian").offset().top - 200 + "px"
        },500)
    })
    
    
})

// 用户登陆成功
$(function () {
    if (localStorage.getItem("login")) {
        $("#index-login").html("欢迎用户&nbsp;&nbsp;&nbsp;" + localStorage.getItem("login") + "<span class='index-login-plus'>PLUS</span>");
    }

    $("#index-header-user-li").click(function () {
        if ($(this).has("span").length == 0) {
            location.href = "../html/login.html";
        }
    })
    
})

// 特价
$(function () {
    // 特价-left-top
    $(".tejia-left-ul").find("li").mouseenter(function () {
        $(this).css({
            "color": "#e1251b",
            "border-bottom":"2px solid #e1251b"
        }).siblings().css({
            "color": "#999",
            "border-bottom":"none"
        })
    })
    // 特价-left-bottom
    // $(".tejia-left-goods-list li").click(function () {
        
    // })
    
})

// 用户退出登录
$(function () {
    $("#index-header-user-li").mouseenter(function () {
        $(".index-user-list").show();
    }).mouseleave(function () {
        $(".index-user-list").hide();
    });

    $(".index-user-list").mouseenter(function () {
        $(this).css({
            "color": "red",
        })
    }).mouseleave(function () {
        $(this).css({
            "color": "#aaa"
        })
    }).click(function () {
        $(this).hide().parent().text("你好，请登录").css({
            "color":"#aaa"
        });
        localStorage.removeItem("login");   
    })
})



