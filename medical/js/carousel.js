// JavaScript Document
;(function($,window,document,undefined){
	//定义对象
	var Carousel=function(ele,opt){
		if(!(this instanceof Carousel))return new Carousel(this,options);
		this.$element=ele,
		this.defaults={
			'readTo':'.carousel',
			'width':'100%',
			'height':'400px'
		},
		this.options = $.extend({}, this.defaults, opt)	
	}
	//定义方法
	Carousel.prototype={
		manualy:function(){
			alert(1);
		}
	}
	//在插件中使用carousel对象
	$.fn.manual=function(options){
	
		var manual=new Carousel(this,options);
		return  manual.manualy();
	}
	
})(jQuery, window, document);