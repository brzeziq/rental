var windowHeight;

$(document).ready(function() { 
	windowHeight = window.innerHeight+'px';

     if(window.innerWidth<700) {
      $(".opisProduktu").css('width','100%');
      $(".ikonaProduktu").hide();
      $("#box").css('padding',0);    
      $("#box1").css('padding',0);
      $("#box1").css('padding-top','30px');
      $("#banner").css({'height':windowHeight,'font-size':'0.5em'});
     }
 
	$(".box").css('min-height',windowHeight);
    var wysokoscProduktu=windowHeight/5;
    $(".produktRamka").css('height',wysokoscProduktu);
 
	$("a").click(function() {
	  event.preventDefault();
	  var pozycja = this.hash;
		
	  $('html,body').animate({
	  scrollTop: $(pozycja).offset().top
	  }, 800);
	
	});


//	$(".produktRamka").mouseenter(function() {$(this).css({backgroundColor: 'rgba(255,255,255,0.95)'})});
//	
//	$(".produktRamka").mouseleave(function() {$(this).css({backgroundColor: 'rgba(55,55,55,0.5)'})});
});
	
//DUŻY EKRAN
	
//if(window.innerWidth>600) {	
//	  $(window).scroll(function() {
//		if ($(document).scrollTop() > 50)   
//		{$("#menuGorne").animate({
//			opacity:'0.8',
//			width: '20%',
//			marginLeft: '-10%'
//		},300);} 
//		else 
//			{$("#menuGorne").animate({
//			opacity:'0.95',
//			width: '26%',
//			marginLeft: '-13%'
//		},300);} 
//	  });
//	}
	

//MAŁY EKRAN	
//		if(window.innerWidth<600) {
//			$("#menuGorne").css({"width":"100%",
//								"margin":"0",
//								"top":"0",
//								 "left":"0",
//								 "border-radius":"0",
//								 "opacity":"1",
//								 "textAlign":"center",
//								 "background":"#bfbfbf"
//								});
//			$("#menuGorne a").css({"width":"100%",
//								"margin":"0",
//								"fontSize":"0.9em",
//								 "color":"404040"
//								});
//			}
//	
//});





//var main = function() {
//  $('.dropdown-toggle').click(function() {
//    $('.dropdown-menu').toggle();
//  });
//}
//
//$(document).ready(main);
