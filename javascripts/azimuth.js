/**
 * Created by win on 2016/5/12.
 */
;(function($, window, document,undefined){
    var Azimuth=function(ele,options){
        this.$element =ele;
        this.defaults ={
            'speed':'500',//滑动速度
            'height':$(window).height(),//默认高度
            'width':$(window).width(),//默认宽度
            'backgroundColor': 'white',
            'auto':true,//是否自动
            'start':0,//从第几个开始
            'textAlign':'center',//显示为师傅居中
            'leftBar':'',//向左手动
            'rightBar':'',//向左手动
            'sliderO':'',
            'sliderOColor':'white',
            'sliderOActive':'black',
            'tabsTitle':'',
            'tabsContents':'',
            'tabsOther':''
        },
        this.settings = $.extend({},this.defaults, options)
    }
    //定义Azimuth的方法
    Azimuth.prototype={
        top:function(options){
          this.$element.on("click", function () {
              debugger;
              $('body,html').animate({ scrollTop: 0 }, options.speed);
          });
        },
        bottom:function(options){
            this.$element.on("click", function () {
                debugger;
                $('body,html').animate({ scrollTop: options.height }, options.speed);
            });
        },
        slide:function(options){
             this.$element.css({'position':'relative','width':options.width,'height':options.height,'background-color':options.backgroundColor,'overflow':'hidden'});
             var nei_silde =$(this.$element.children()[0]);
             var $width=size*options.width;
             nei_silde.css({'position':'absolute','width':$width,'height':options.height,'z-index':100});
            $(nei_silde.children()).css({'width':options.width,'height':options.height,'float':'left'});

            var size = $(nei_silde.children()).size();
            var nei_silde_o;
            if(options.sliderO ==""){
                nei_silde_o=$(this.$element.children()[1]);
                $(nei_silde_o).css({'position':'absolute','width':options.width,'z-index':101,'bottom':0,'text-align':options.textAlign});
            }else{
                nei_silde_o=$("."+options.sliderO);
            }
            $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
            $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
            //处理手柄默认和自定义的分支编写：如果分支位置是自定义的那么我们显示执行已定义手柄，如果手柄未定义那么执行默认或者不执行默认
            if(options.leftBar==""){
                var left_bar_o=$(this.$element.children()[2]);
                var bar_h=(options.height/2)-left_bar_o.height()*2;
                $(left_bar_o).css({'position':'absolute','z-index':101,'background-color':options.sliderOColor,'top':bar_h-20,'padding':'30px 10px 30px 0px'});
                left_bar_o.on("click",function(){
                    options.start++;
                    if(options.start>=size){
                        options.start=0;
                    }
                    w=options.start*options.width;
                    nei_silde.animate({'left':-w});
                    $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                    $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
                })

                var right_bar_o=$(this.$element.children()[3]);
                $(right_bar_o).css({'position':'absolute','z-index':101,'background-color':options.sliderOColor,'right':0,'top':bar_h-20,'padding':'30px 0px 30px 10px'});
                right_bar_o.on("click",function(){
                    options.start--;
                    if(options.start<0){
                        options.start=size-1;
                    }
                    w=options.start*options.width;
                    nei_silde.animate({'left':-w});
                    $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                    $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
                });
                $(this.$element).on("mouseout",function(){
                    right_bar_o.hide();
                    left_bar_o.hide();
                });

                $(this.$element).on("mousemove",function(){
                    right_bar_o.show();
                    left_bar_o.show();
                })
            }else{
                $("."+options.leftBar).on("click",function(){
                    options.start++;
                    if(options.start>=size){
                        options.start=0;
                    }
                    w=options.start*options.width;
                    nei_silde.animate({'left':-w});
                    $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                    $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
                })

                $("."+options.rightBar).on("click",function(){
                    options.start++;
                    if(options.start>=size){
                        options.start=0;
                    }
                    w=options.start*options.width;
                    nei_silde.animate({'left':-w});
                    $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                    $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
                })
            }
            if(options.auto){
                setInterval(function(){
                    options.start++;
                    if(options.start>=size){
                        options.start=0;
                    }
                    w=options.start*options.width;
                    nei_silde.animate({'left':-w});
                    $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                    $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
                },options.speed);
            };
            $(nei_silde_o.children()).on("click",function(){
                var index=$(this).index();
                console.log(index);
                options.start=index;
                w=options.start*options.width;
                nei_silde.animate({'left':-w});
                $(nei_silde_o.children()).css({'width':'8','height':'8','background-color':options.sliderOColor,'display':'inline-block','border-radius':'8px','margin':'5px'});
                $(nei_silde_o.children()[options.start]).css({'width':'8','height':'8','background-color':options.sliderOActive,'display':'inline-block','border-radius':'8px','margin':'5px'});
            });
        },

        tabs:function(options){
            var $this= $(this.$element);
            $(this.$element).find("."+options.tabsContents).children().css({'display':'none'});
            $($(this.$element).find("."+options.tabsContents).children()[0]).css({'display':'block'});
            $(this.$element).find("."+options.tabsTitle).children().on("click",function(){
                var index=$(this).index();
                $($this).find("."+options.tabsContents).children().css({'display':'none'});
                $($($this).find("."+options.tabsContents).children()[index]).css({'display':'block'});
                $($this).find("."+options.tabsOther).children().css({'display':'none'});
                $($($this).find("."+options.tabsOther).children()[index]).css({'display':'block'});
            });

        },
        code:function(options){
            var $this= $(this.$element);
            debugger;
            var str=$this.html();
            if    (str.length    ==    0)    return    "";
            s    =    str.replace(/&/g,    "&gt;");
            s    =    s.replace(/</g,        "&lt;");
            s    =    s.replace(/>/g,        "&gt;");
            s    =    s.replace(/    /g,        "&nbsp;");
            s    =    s.replace(/\'/g,      "'");
            s    =    s.replace(/\"/g,      "&quot;");
            s    =    s.replace(/\n/g,      "<br>");
            console.log(s);
            $this.html(s)
        }
    }

    $.fn.AzimuthTop=function(options){
        var azimuth=new Azimuth(this,options);
        return azimuth.top(azimuth.settings);
    }

    $.fn.AzimuthBottom=function(options){
        var azimuth=new Azimuth(this,options);
        return azimuth.bottom(azimuth.settings);
    }

    $.fn.AzimuthSlide=function(options){
        var azimuth=new Azimuth(this,options);
        return azimuth.slide(azimuth.settings);
    }
    $.fn.AzimuthTabs=function(options){
        var azimuth=new Azimuth(this,options);
        return azimuth.tabs(azimuth.settings);
    }
    $.fn.AzimuthCode=function(options){
        var azimuth=new Azimuth(this,options);
        return azimuth.code(azimuth.settings);
    }
})(jQuery, window, document);
