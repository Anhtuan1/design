$(document).ready(function () {
	$('.owl-carousel').owlCarousel({ // .owl-carousel is the element selector
	  margin: 0, // gives space between carousel items
	  stagePadding: 0, // shows a bit of the next item, which is still not visible
	  loop:true,
	  dots: true,
	  autoPlay:1000,
	  responsive:{ // responsive behaviour
		0:{
		  items:1
		},
		768:{ // for example at 768 screen width, owl carousel will only show two items
		  items:3
		},
		970:{
		  items:3
		}
	  }
	  
	});			
		$('.nav-tabs a').click(function(){
			$(this).tab('show');
		})

		// Select tab by name
		$('.nav-tabs a[href="#home"]').tab('show')

		// Select first tab
		$('.nav-tabs a:first').tab('show') 

		// Select last tab
		$('.nav-tabs a:last').tab('show') 

		// Select fourth tab (zero-based)
		$('.nav-tabs li:eq(3) a').tab('show')
		
		$('#design-case').click(function(){	
			
			var strlink = device+"-design.html?"+new Date();
			$.ajax({
				type : "GET",
				dataType : "html",
				data : {
					
				},
				url : strlink,
				success : function(response)
				{
					$("#content-themes").empty();
					$("#content-themes").append(response);
					//$("#content-themes").hide().append(response).fadeIn(500);
					
				},
				error:function(error){
					
				}
			});		
				
		});

		heightslide();	

});


function heightslide(){
	var height_value_phone = document.getElementById('value-phone').clientHeight;
	var height_value_button = document.getElementById('design-case').clientHeight;
	var height_value_menu = document.getElementById('headersp').clientHeight;
	var height_slide = window.innerHeight - height_value_phone - height_value_button - height_value_menu-25;
	$(document.getElementById('slide_product_next')).css({'height': height_slide+'px'});
	$('.content_product_sp_slide img').css({'max-height': height_slide+'px'});				
}

