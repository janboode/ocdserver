/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


$(document).ready(function(){
	
	$('.tester').text($(window).width());
	
	$( window ).resize(function() {
  		$('.tester').text($(window).width());
	});
	
	
	////////////////////////////////////
	// localScroll
	////////////////////////////////////
	
	$.localScroll({duration: 1800, easing: 'easeInOutQuint', offset: {top: -60}});
	
	
	$(window).bind('scroll', function() {
	   var navHeight = 465;
	   
	  // $('.tester').text($(window).scrollTop());
	   
	   
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	
	
	$(window).scroll(function() {
                    
		var top = $(window).scrollTop();
		
		$('.pork').css('top', 350 + top * -2 + 'px');
		$('.pickaxe').css('top', 2500 + top * -2.8 + 'px');		
		//$('.squid').css('top', 4500 + top * -3 + 'px');			
		//$('.goldsword').css('top', 6500 + top * -2.6 + 'px');			
		$('.dia_sword').css('top', 6500 + top * -2.6 + 'px');		
		//$('.dia').css('top', 5500 + top * -2.8 + 'px');			
		$('.egg').css('top', 5500 + top * -2.8 + 'px');	
		$('.flower_red').css('top', 4000 + top * -3 + 'px');		
		$('.flower_yel').css('top', 15000 + top * -4 + 'px');		
		$('.wood_axe').css('top', 12000 + top * -3.7 + 'px');	
			
		
	}); // window scroll Ends
	
	
	$window = $(window);
                
   $('div [data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		if ($(window).width() > 900){
			$bgobj.css({ backgroundPosition: coords });
		}else {
			//
		}
		
	}); // window scroll Ends

 });	

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");