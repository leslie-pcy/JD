// 购物车效果
$(function () {

    // 取消点击默认选中事件
    $("body").hover(function(){
        document.onselectstart = function(){return false},
        function(){
            document.onselectstar=text;            
        }
    });

    // 查询购物车
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id:localStorage.getItem("uid")
    }, data => {
            console.log(data.data);

            // 头部购物车商品总件数
            $(".content h3 span").text(data.data.length);

            // 购物车列表显示
            var str = "";
            for (let i = 0; i < data.data.length; i++){
                str += `<li>
                    <input type="checkbox" name="" class="checkOne">
                    <div class="img-wrap">
                        <img src="${data.data[i].pimg}" alt="">
                    </div> 
                    <p class="title">${data.data[i].pname}</p>
                    <p class="price">￥<span>${data.data[i].pprice}</span></p>
                    <div class="update-count">
                        <span class="jian">-</span>
                        <input type="text" class="count" value="${data.data[i].pnum}" data-id="${data.data[i].pid}">
                        <span class="jia">+</span>
                    </div>
                    <div class="totalOne">￥
                        <span>${data.data[i].pprice * data.data[i].pnum}</span>
                    </div>
                    <div class="del" data-id="${data.data[i].pid}">X</div>
                </li>`;
                
            }
            $(".cart-list").html(str);
           

            // 减
            $(".jian").each(function () {
                $(this).click(function () {
                    $(this).next().val($(this).next().val()-1)
                    if ($(this).next().val() <= 1) {
                        $(this).next().val(1);
                    }

                    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                        uid: localStorage.getItem("uid"),
                        pid: $(this).next().attr("data-id"),
                        pnum: $(this).next().val()
                    }, data => {
                            console.log(data);
                            $(this).parent().next().find("span").text($(this).next().val() * $(this).parent().prev().find("span").text());
                            total();
                    })
                })  
            })

            // 加
            $(".jia").each(function () {
                $(this).click(function () {
                    $(this).prev().val(parseInt($(this).prev().val()) + 1);

                    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                        uid: localStorage.getItem("uid"),
                        pid: $(this).prev().attr("data-id"),
                        pnum: parseInt($(this).prev().val())
                    }, data => {
                            console.log(data);
                            $(this).parent().next().find("span").text($(this).prev().val() * $(this).parent().prev().find("span").text());
                            total();
                    })
                })  

                
            })

            // 输入数量
            $(".count").each(function () {
                
                $(this).change(function () {
                    $(this).val(parseInt($(this).val()));
                    if ($(this).val() <= 1 || isNaN($(this).val())) {
                        $(this).val(1);
                    }

                    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                        uid: localStorage.getItem("uid"),
                        pid: $(this).attr("data-id"),
                        pnum: $(this).val()
                    }, data => {
                            console.log(data);
                            
                            $(this).parent().next().find("span").text($(this).val() * $(this).parent().prev().find("span").text())
                            total();
   
                    })
                })
            })

            // 删除
            $(".del").each(function () {
                $(this).click(function () {
                    $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                        uid: localStorage.getItem("uid"),
                        pid: $(this).attr("data-id")
                    }, data => {
                            console.log(data);
                        
                    });

                    $(this).parent().remove();
                    $(".content h3 span").text($(".content h3 span").text() - 1);
                    total();


                })
            })

            // 全选
            $(".checkAll").click(function () {
                if ($(".checkAll").prop("checked") == true) {
                    $(".checkOne").each(function () {
                        $(this).prop("checked", true);
                        total();
                    })
                } else {
                    $(".checkOne").each(function () {
                        $(this).prop("checked", false);
                        $(".totalPriceAll span").text(0)
                    })
                }
                
            })

            // 单选
            $(".checkOne").each(function () {
                
                $(this).click(function () {
                    $count = 0;
                    $total = 0;
                    $(".checkOne").each(function () {
                        if ($(this).prop("checked") == true) {
                            $count++;
                            $total += parseInt($(this).parent().find(".totalOne").find("span").text());
                        } else {
                            $total = $total;
                        }

                    })
                    console.log($(this).parent().find(".totalOne").find("span").text())
                    $(".totalPriceAll span").text($total);
                    
                    
                  
                    if ($count == $(".checkOne").length) {
                        $(".checkAll").prop("checked", true);
                    } else {
                        $(".checkAll").prop("checked", false);
                    }

                    
                })
            })

            // 修改总价
            function total() {
                $total = 0;
                $(".totalOne").each(function () {
                    console.log($(this).prop("checked"))
                    if ($(this).prop("checked", true)) {
                        $total += parseInt($(this).find("span").text());
                    }             
                })
                $(".totalPriceAll span").text($total);
            }

            // 默认总价
            
                   
    })
    
})


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

    // $("#logo-nav-code img").mouseover(function () {
    //     $(".codelist").show();
    //     console.log("aaa");
    // })

    // 用户登陆成功
    $(function () {
        if (localStorage.getItem("login")) {
            $("#index-login").html("欢迎用户&nbsp;&nbsp;&nbsp;" + localStorage.getItem("login") + "<span class='index-login-plus'>PLUS</span>");
        }

        $("#index-header-user-li a").click(function () {
            if ($(this).has("span").length == 0) {
                location.href = "../html/login.html";
            } else {
                location.reload();
            }
            
        })
        
    })

    // 全部商品总价
    // $(function () {
    //     $priceAll =
    //     $(".totalOne").each(function () {
            
    //     })
    //     $(".totalPriceAll").text()
    // })
    


});