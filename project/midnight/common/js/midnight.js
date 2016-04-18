/**
 * Created by win on 2016/4/18.
 */
;$(function(){
    $(".mobile-btn").on("mousemove",function(){
        $(".mobile-box").show();
    });
    $(".mobile-btn").on("mouseout",function(){
        $(".mobile-box").hide();
    });
});