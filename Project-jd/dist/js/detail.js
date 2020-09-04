$(function () {

    // 取消点击默认选中事件
    $("body").hover(function(){
        document.onselectstart = function(){return false},
        function(){
            document.onselectstar=text;            
        }
    });

    
    
    // 显示商品信息，加入购物车
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id:localStorage.getItem("detail-id")
    }, data => {
            // 显示商品信息
            console.log(data);
            $(".pimg").attr("src",data.data.pimg);
            $(".title").text(data.data.pname);
            $(".price").text(data.data.pprice);
            
    })


    // 加
    $(".add").click(function () {
        $(".count").val(parseInt($(".count").val()) + 1);

        
    })

    // 减
    $(".jian").click(function () {
        if ($(".count").val() <= 1) {
            $(".count").val(1);
        } else {
            $(".count").val(parseInt($(".count").val()) - 1);
        }   
    })

    // 输入数量
    $(".count").change(function () {
        $(".count").val(parseInt($(".count").val()));
        if ($(".count").val() <= 1 || isNaN($(".count").val())) {
            $(".count").val(1);
        }
    })

     // 加入购物车
    $(".add-cart").click(function () {
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
            uid: localStorage.getItem("uid"),
            pid: localStorage.getItem("detail-id"),
            pnum:$(".count").val()
        }, data => {
                console.log(data);
                cartPoint();
        })
        
    })

    // 查询购物车
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id:localStorage.getItem("uid")
    }, data => {
            console.log(data)
    })

    // 进入购物车
    $(".fly-top .cart").click(function () {
        location.href = "../html/cart.html";
    })

    // 购物车小圆点
    function cartPoint() {
        $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
            id:localStorage.getItem("uid")
        }, data => {
                console.log(data.data);
                $cartCount = 0;
                for (let i = 0; i < data.data.length; i++){
                    $cartCount += parseInt( data.data[i].pnum);
                }
                console.log($cartCount);
                $(".cart-goods-count").text($cartCount);
        })
    }

    cartPoint();
    

})


