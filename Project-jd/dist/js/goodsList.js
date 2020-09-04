$(function () {
  
    // 添加商品
    // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
    //     pimg: "../img/index_tuijian_img_1.webp",
    //     pname: "麦吉丽（mageline）贵妇美颜膏 素颜霜遮瑕",
    //     pprice: "1200.",
    //     pdesc: "",
    //     uid:localStorage.getItem("uid")
    // }, data => {
    //         console.log(data);     
    // })


    // 查询商品
    // $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    //     uid:localStorage.getItem("uid")
    // }, data => {
    //     console.log(data);
    // })


    // 删除商品
    // $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
    //     pid:312652,
    //     uid: localStorage.getItem("uid"),
    //     token:localStorage.getItem("token")
    // })


    // 显示商品列表
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: localStorage.getItem("uid")
    }, data => {
        console.log(data.data);
        data.data.sort(function (a,b) {
            return a.pprice - b.pprice;
        })
        

            
        var str = "";
        for (var i = 0; i < data.data.length; i++) {
            // console.log(data.data[i]);
            str += `<li>
                    <img src="${data.data[i].pimg}" alt="" data-id="${data.data[i].pid}">
                    <p class="title">${data.data[i].pname}</p>
                    <p class="price">￥
                        <span>${data.data[i].pprice}</span>
                    </p>
                    <button data-id="${data.data[i].pid}">加入购物车</button>
                </li>`;
        }
        $("#goodsList-ul").html(str);

        // 加入购物车按钮
        $("#goodsList-ul li").each(function () {
            $(this).mouseenter(function () {
                $(this).find("button").show();
            }).mouseleave(function () {
                $(this).find("button").hide();
            });

            $(this).find("button").click(function () {
                // console.log($(this).attr("data-id"));

                // 添加购物车
                $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                    uid: localStorage.getItem("uid"),
                    pid: $(this).attr("data-id"),
                    pnum: 1
                }, data => {
                        console.log(data);
                        cartPoint();
                })

            })

            $(this).find("img").click(function () {
                location.href = "../html/detail.html";
                localStorage.setItem("detail-id", $(this).attr("data-id"));
            })
        })

        // 查询购物车
        $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
            id: localStorage.getItem("uid")
        }, data => {
            console.log(data)
        })
           

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
