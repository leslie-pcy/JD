$(function () {
    $u = false;
    $p = false;
    $("#username").change(function () {
        $uPattern = /^[a-zA-Z0-9_]{4,16}$/;
        $result_u = $uPattern.test($(this).val());

        if (!$result_u) {
            $("#message-username").text("用户名格式不正确，请重新输入！");  
        } else {
            $("#message-username").text(""); 
            $u = true;
        }
    })

    $("#password").change(function () {
        $pPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
        $result_p = $pPattern.test($(this).val());

        if (!$result_p) {
            $("#message-password").text("密码格式不正确，请重新输入！");  
        } else {
            $("#message-password").text(""); 
            $p = true;
        }
    })

    $("#regist").click(function () {
        console.log($u && $p)
        if ($u && $p) {
            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                "username":$("#username").val(),
                "password":$("#password").val()
            }, data => {
                    console.log(data);
                    if (data.code == 1) {
                        $(".point").css({
                            "color": "#33bb44"
                        });
                        $(".grey").attr("class", "green");
                        location.href = "../html/login.html";
                        $("#username").val("");
                        $("#password").val("");
                    } else{
                        alert("用户名已存在,请重新输入！")
                    }
            })  
        }
        
    })
    
})