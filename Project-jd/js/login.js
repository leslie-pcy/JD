$(function () {
    $("#zhanghu").click(function () {
        $("#login-by-zhanghao").show();
        $("#login-by-code").hide();
        $(this).css({
            "color": "#e4393c",
            "font-weight": "700"
        });
        $("#saoma").css({
            "color": "#666",
            "font-weight": "normal"
        });
    })

    $("#saoma").click(function () {
        $("#login-by-zhanghao").hide();
        $("#login-by-code").show();
        $("#saoma").css({
            "color": "#e4393c",
            "font-weight": "700"
        });
        $("#zhanghu").css({
            "color": "#666",
            "font-weight": "normal"
        });
    })

    $("#code-tab").mouseenter(function () {
        $(this).find("div").animate({
            "left":0
        }, 300).next().fadeIn(300);
    }).mouseleave(function () {
        $(this).find("div").animate({
            "left":"65px"
        }, 300).next().fadeOut(300);
    })
    
})

$(function () {
    $("#sub").click(function () {
        $username = $("#username").val();
        $password = $("#password").val();
        
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            "username": $username,
            "password":$password
        }, data => {
                if(data.code == 1){
                    location.href = "../index.html";
                    localStorage.setItem("login", $username);
                    localStorage.setItem("uid", data.data.id);
                    localStorage.setItem("token", data.data.token);
                } else {
                    alert("用户名和密码不匹配，请重新输入！")
                }
        })
    })
})