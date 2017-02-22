define(function(require){
	require('./jquery.min');
	var Carousel=function($carousel){
		this.ct=$carousel;
	    this.init();
	    this.bind();
	    //this.autoPlay();
	}
	Carousel.prototype.init=function(){
		this.$ct = this.ct.find('.img-ct');
	    this.$items=this.$ct.children();
	    this.$pre= this.ct.find('.pre');
	    this.$next=this.ct.find('.next');
	    this.$bullet=this.ct.find('.bullet');
	    this.imgWidth=this.$items.width();
	    this.imgCount=this.$ct.children().size();

	    this.$ct.prepend(this.$items.last().clone());
		this.$ct.append(this.$items.first().clone());
		this.imgRealCount=this.$ct.children().length;
		this.$ct.css({left:0-this.imgWidth,width:this.imgRealCount*this.imgWidth});
	};
	Carousel.prototype.bind=function(){
		this.curIdx=0;
		this.isAnimate=false;
		var _this=this;
		this.$next.on('click',function(e){
			e.preventDefault(); 
			_this.playNext();
		});
		this.$pre.on('click',function(e){
			e.preventDefault(); 
			_this.playPre();
		});
		this.$bullet.find('li').on('click',function(){
			var idx=$(this).index();
			if(idx > _this.curIdx){
				_this.playNext(idx-_this.curIdx);
			}else if(idx < _this.curIdx){
				_this.playPre(_this.curIdx-idx);
			}
		});
	};
	Carousel.prototype.playNext=function(idx){
		var idx = idx || 1;
		var _this=this;
			if(!this.isAnimate){
				this.isAnimate=true;
				this.$ct.animate({left:'-='+(_this.imgWidth*idx)},800,function(){
					_this.curIdx+=idx;
					if(_this.curIdx==_this.imgCount){
						_this.$ct.css({left:0-_this.imgWidth});
						_this.curIdx=0;
					}
					_this.isAnimate=false;
					_this.setBullet();
				});
			}
	};
	Carousel.prototype.playPre=function(idx){
		var idx=idx||1;
		var _this=this;
			if(!this.isAnimate){
				this.isAnimate=true;
				this.$ct.animate({left:'+='+(_this.imgWidth*idx)},800,function(){
					_this.curIdx=(_this.imgCount+_this.curIdx-idx)%_this.imgCount;
					if(_this.curIdx==(_this.imgCount-1)){
						_this.$ct.css({left:0-_this.imgWidth*_this.imgCount});
					}
					_this.isAnimate=false;
					_this.setBullet();
				});
			}
	};
	Carousel.prototype.setBullet=function(){
		this.$bullet.find('li').removeClass('active')
			                  .eq(this.curIdx).addClass('active');
	};
	Carousel.prototype.autoPlay=function(){
		var _this=this;
		this.clock=setInterval(function(){
				_this.playNext();
		},3000);
	};
	Carousel.prototype.stopAuto=function(){
		clearInterval(this.clock);
	};

	return {
		init:function($ct){
			$ct.each(function(index,node){
				new Carousel($(node));
			});
		}
	}
})


