/**
 * Created by Admin on 2016/3/10.
 */
// JavaScript Document
$(
    function (){
        var sesssionUsername = $("#sesssionUsername").val();
        var userType = $("#userType").val();
        if(userType=="customer") {
            $('#loginArea').addClass('logined');
            $("#loginedUsername").text(sesssionUsername);
        }

        if($.cookie('username')){
            $("#login_username").val($.cookie('username'));
        }

        var loginHandler = {};
        var loginOutHandler = {};

        loginHandler.clickFormSubmit = function(){

            var username = $("#login_username").val();
            var password = $("#login_password").val();
            var validatecode = $("#validatecode").val();

            if (!validatecode) {
                $('#loginArea').addClass('error');
                $('#errorMsg span').text("验证码不能空");
                return false;
            }
            if (username == '' || username == "用户名") {

                $('#loginArea').addClass('error');
                $('#errorMsg span').text("请输入用户名");
                return false;
            }
            if (password == '' || password == "●●●●●") {
                $('#loginArea').addClass('error');
                $('#errorMsg span').text("请输入用密码");
                return false;
            }
            var data = {};
            data['vo.username'] = username;
            data['vo.password'] = password;
            data['vo.validateCode'] = validatecode;
            $.ajax({
                type : "POST",
                url : contextPath + "/customer/login/login.action",
                data : data,
                async : false,
                success : function(jsonStr) {
                    //var json = JSON.parse(jsonStr);
                    if (jsonStr.success) {
                        $('#loginArea').addClass('logined');
                        $("#loginedUsername").text(username);
                        if($.cookie('username')){
                            $.cookie('username', username);
                        }else{
                            var date = new Date();
                            date.setTime(date.getTime() + (60 * 1000));
                            $.cookie('username', username, {expires:7, path: '/'});
                        }
                        window.location.href = contextPath + "/customer/aaaAccount/Search.action";
                    } else {
                        if(jsonStr.errorType == 'validateCodeError'){
                            $('#loginArea').addClass('error');
                            $('#errorMsg span').text("验证码错误");
                        }else{
                            $('#loginArea').addClass('error');
                            $('#errorMsg span').text("用户名或密码错误!");
                        }
                    }
                },
                error : function() {
                    $('#loginArea').addClass('error');
                    $('#errorMsg span').text("系统发生错误，请联系管理员!");
                }
            });
        }

        loginOutHandler.logout=function(){

            $.ajax({
                type : "POST",
                url : contextPath + "/customer/login/logout.action",
                data : {},
                dataType : "json",
                async : false,
                success : function(jsonStr) {
                    if (jsonStr.success) {
                        window.location.href = contextPath + "/jsp/chinaunicom/index.jsp";
                    } else {
                        alert(json.errorMsg);
                    }
                },
                error : function() {
                    alert("系统发生错误，请联系管理员。");
                }
            });
        }

        $(document).on("click","button#loginSubmit",loginHandler.clickFormSubmit);
        $(document).on("click","#logout",loginOutHandler.logout);
    }
)