/**
 * Created by Admin on 2016/3/10.
 */
// JavaScript Document
//���幤����
var vlink = function (){};
$v = window.vlink = vlink;
$(function (){
    //��¼
    $v.login();
    //����
    $v.nav();
    //QQ�ر�
    $v.qq();
    //AD�ر�
    $v.ad();
})
//��¼
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
//����
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
//QQ�ر�
$v.qq = function (){
    var closeBtn = $("#onService #close");
    closeBtn.on("click",function (){
        $("#onService").fadeOut();
    });
}
//AD�ر�
$v.ad = function (){
    $("#advertisement").slideDown("slow");
    var closeBtn = $("#advertisement .close");
    closeBtn.on("click",function (){
        $("#advertisement").slideUp();
    });
}


