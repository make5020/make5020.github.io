// JavaScript Document
var ps;
$(function($){
    
    var html=$('code').html();
    var s=HTMLEnCode(html);
    $('code').html(s)

    $(".tabs .tab").on("click",function(){
        $(".tabs .tab[class^='tab']").css({'background':'#fff'});
        $(this).css({'background':'#eee'});
        var content=$(this).parent().next();
        var index=$(this).index();
        var content=$(this).parent().next().children();
        $(content).hide();
         $(content[index]).show();
    });
});

    function    HTMLEnCode(str)    
    {   
         /*var    s    =    "";
         if    (str.length    ==    0)    return    "";   
         s    =    str.replace(/&/g,    "&gt;");   
         s    =    s.replace(/</g,        "&lt;");   
         s    =    s.replace(/>/g,        "&gt;");   
         s    =    s.replace(/    /g,        "&nbsp;");   
         s    =    s.replace(/\'/g,      "'");   
         s    =    s.replace(/\"/g,      "&quot;");   
         s    =    s.replace(/\n/g,      "<br>");   
         return    s;   */
    }   
    function    HTMLDeCode(str)   
    {   
         var    s    =    "";   
         if    (str.length    ==    0)    return    "";   
         s    =    str.replace(/&amp;/g,    "&");   
         s    =    s.replace(/&lt;/g,        "<");   
         s    =    s.replace(/&gt;/g,        ">");   
         s    =    s.replace(/&nbsp;/g,        "    ");   
         s    =    s.replace(/'/g,      "\'");   
         s    =    s.replace(/&quot;/g,      "\"");   
         s    =    s.replace(/<br>/g,      "\n");   
         s    =    s.replace(/&#39;/g,      "\'");  
         return    s;   
    }   