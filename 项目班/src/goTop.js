define(function(require){
	require('./jquery.min');
	function GoTop($ct){
	   this.ct=$ct || $('body');
	   this.target=$('<div class="gotopBtn"><img src="项目班图片/top.png"></div>');
	   this.target.css({
	   	position:'fixed',
	   	right: '20px',
		bottom:'20px'
	   });
	}
	GoTop.prototype.bindEvent=function(){
		this.target.on('click',function(){
			$(window).scrollTop(0);
		});
		var $top=this.target;
		$(window).on('scroll',function(){
			if($(this).scrollTop()>100){
				$top.show();
			}else{
				$top.hide();
			}
		});
	};
	GoTop.prototype.createNode=function(){
		this.ct.append(this.target);
		this.target.hide();
	};


	var $top=new GoTop();
	$top.createNode();
	$top.bindEvent();
})