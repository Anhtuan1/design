 function sticky_relocate() {
            var window_top = $(window).scrollTop();
            var div_top = $('#scrool_menu').offset().top;
            if (window_top > div_top) {
                $('#menu').addClass('stick_page');
                $('#header').addClass('maginbottom40');
            } else {
                $('#menu').removeClass('stick_page');
                $('#header').removeClass('maginbottom40');
            }			
			
		 
        }

        $(function () {
           // $(window).scroll(sticky_relocate);
            //sticky_relocate();
			$(".content-out-team").each(function(){
				var heighwd = $( window ).height();

				var xedich = heighwd - $(this).find('table')[0].clientHeight;				
				$(this).find('table').css('margin-top',xedich/2+'px');
				
			});
			
			
        });
$(document).ready(function () {
			$('ul.nav li.dropdown').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).fadeIn(300);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).fadeOut(300);
			});
			function demo01() {
				$(this).next().slideToggle(300);
			}
			$(".simple .toggle").click(demo01);
			function demo02() {
				$(this).toggleClass("active").next().slideToggle(300);
			}
			$(".switch .toggle").click(demo02);			
			/* $("#slide_product_next_sp").owlCarousel({ // .owl-carousel is the element selector
			  margin: 0, // gives space between carousel items
			  stagePadding: 0, // shows a bit of the next item, which is still not visible
			  responsive:{ // responsive behaviour
				0:{
				  items:2
				},
				768:{ // for example at 768 screen width, owl carousel will only show two items
				  items:3
				},
				970:{
				  items:4
				}
			  }
			});
			$("#slide3").owlCarousel({ // .owl-carousel is the element selector
			  margin: 0, // gives space between carousel items
			  stagePadding: 0, // shows a bit of the next item, which is still not visible
			  responsive:{ // responsive behaviour
				0:{
				  items:1
				},
				768:{ // for example at 768 screen width, owl carousel will only show two items
				  items:1
				},
				970:{
				  items:1
				}
			  }
			});
			$("#owl-demo").owlCarousel({ // .owl-carousel is the element selector
			  margin: 0, // gives space between carousel items
			  stagePadding: 0, // shows a bit of the next item, which is still not visible
			  responsive:{ // responsive behaviour
				0:{
				  items:1
				},
				768:{ // for example at 768 screen width, owl carousel will only show two items
				  items:4
				},
				970:{
				  items:4
				}
			  },
			  nav:true
			}); */
			
			$(window).scroll(function () {
				if ($(this).scrollTop() > 300) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});

			$('.scrollup').click(function () {
				console.log("a");
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false;
			});
			$(document.getElementById('menubutton')).bind("mouseup",function () {
				$('#menubutton').addClass('displaynone');
				$('#menubuttonclose').removeClass('displaynone');					
				$('#backgourndmenu').css('height',$(document).height());
				
				$("html, body").animate({
					scrollTop: 0
				}, 600);					
			});
			$(document.getElementById('menubuttonclose')).bind("mouseup",function () {
				$('#menubutton').removeClass('displaynone');
				$('#menubuttonclose').addClass('displaynone');
								
			});
			
		
});
$( window ).resize(function() {
	var w = window.innerWidth;	

	
	$(".modal-wide").on("show.bs.modal", function() {
	  var height = $(window).height() - 20;
	  //$(this).find(".modal-body").css("max-height", height);
	});
	
	
});