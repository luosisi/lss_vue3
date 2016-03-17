/**
 * Created by Admin on 2016/3/10.
 */
// JavaScript Document
//定义工具类
var vlink = function (){};
$v = window.vlink = vlink;
$(function (){
    //登录
    $v.login();
    //导航
    $v.nav();
    //QQ关闭
    $v.qq();
    //AD关闭
    $v.ad();
})
//登录
$v.login = function (){
    var linkLoginBox = $("#loginBtn")[0];
    $(document).on("click","#loginBtn",function (){
        $("#loginArea").fadeIn("fast");
        $("#fp-nav").hide();
    });
    $(document).on("click",function (event){
        var node = $(event.target).parents("#loginArea")[0];
        if ( node === undefined && event.target  != linkLoginBox)
        {
            $("#loginArea").hide();
            $("#fp-nav").show();
        }

    });
    $(document).on("click","#closeLogin",function (){
        $("#loginArea").hide();
        $("#fp-nav").show();
    });
}
//导航
$v.nav = function (){
    $(document).on("click",".mobileNav",function (){
        $(".navigation").fadeIn("fast");
    });
    var linkLoginBox = $(".navigation")[0];
    $(document).on("click",function (event){

        if( $(".mobileNav").is(":visible") == true )
        {
            var node = $(event.target).parents(".mobileNav")[0];
            if ( node === undefined && event.target  != linkLoginBox)
            {
                $(".navigation").hide();
            }
        }


    });
}
//QQ关闭
$v.qq = function (){
    var closeBtn = $("#onService #close");
    closeBtn.on("click",function (){
        $("#onService").fadeOut();
    });
}
//AD关闭
$v.ad = function (){
    $("#advertisement").slideDown("slow");
    var closeBtn = $("#advertisement .close");
    closeBtn.on("click",function (){
        $("#advertisement").slideUp();
    });
}


