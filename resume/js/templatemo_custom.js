"use strict";
var menuDisabled = false;
jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	// $(".main_menu a").on('click',function(){
	// 	var id =  $(this).attr('class');
	// 	id = id.split('-');
	// 	//$("#menu-container .content").hide();
	// 	//$("#menu-container #menu-"+id[1]).show();
	// 	//$("#menu-container .homepage").hide();
	// 	return false;
	// });
	

	$(".main_menu a.templatemo_homeinfo").click(function(){
		$("#menu-container .portfolio").hide();
		$('#menu-container .basicInfo').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page2").click(function( ){
    $('#menu-container .homepage').fadeOut(1000, function(){									  
        $('#menu-container .basicInfo').fadeIn(1000);
	    });
	return false;
	});
	
	$(".main_menu a.templatemo_homeportfolio").click(function(){
		$('#menu-container .portfolio').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});

	$(".main_menu a.templatemo_page3").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .portfolio').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_hometestimonial").click(function(){
		$('#menu-container .testimonial').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page4").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .testimonial').fadeIn(1000);
	    });
		return false
	});
	$(".main_menu a.templatemo_homeabout").click(function(){
		$('#menu-container .about').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});

	$(".main_menu a.templatemo_page5").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .about').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_homecontact").click(function(){
		$('#menu-container .contact').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page6").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .contact').fadeIn(1000);
		loadScript();		
	    });
	});
	
	
	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);

	console.log('感谢您查看，欢迎与我联系，邮箱：348291442@qq.com');
	console.log('---by 黄露');
	/************** LightBox(插件) *********************/
	// $(function(){
	// 	$('[data-rel="lightbox"]').lightbox();
	// });


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});

