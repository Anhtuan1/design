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
			
			var strlink = device+"-design.html";
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
					
				},
				error:function(error){
					
				}
			});		
				
		});
		
		
		
		/* // target elements with the "draggable" class
		interact('.draggable')
		  .draggable({
			// enable inertial throwing
			inertia: true,
			// keep the element within the area of it's parent
			restrict: {
			  restriction: "parent",
			  endOnly: true,
			  elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
			},
			// enable autoScroll
			autoScroll: true,

			// call this function on every dragmove event
			onmove: dragMoveListener,
			// call this function on every dragend event
			onend: function (event) {
			  var textEl = event.target.querySelector('p');

			 
			}
		  });

		  function dragMoveListener (event) {
			var target = event.target,
				// keep the dragged position in the data-x/data-y attributes
				x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
				y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

			// translate the element
			target.style.webkitTransform =
			target.style.transform =
			  'translate(' + x + 'px, ' + y + 'px)';

			// update the posiion attributes
			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
		  }
			
			//resize
			interact('.resize-drag')
			  .draggable({
				onmove: window.dragMoveListener
			  })
			  .resizable({
				preserveAspectRatio: true,
				edges: { left: true, right: true, bottom: true, top: true }
			  })
			  .on('resizemove', function (event) {
				var target = event.target,
					x = (parseFloat(target.getAttribute('data-x')) || 0),
					y = (parseFloat(target.getAttribute('data-y')) || 0);

				// update the element's style
				target.style.width  = event.rect.width + 'px';
				target.style.height = event.rect.height + 'px';

				// translate when resizing from top or left edges
				x += event.deltaRect.left;
				y += event.deltaRect.top;

				target.style.webkitTransform = target.style.transform =
					'translate(' + x + 'px,' + y + 'px)';

				target.setAttribute('data-x', x);
				target.setAttribute('data-y', y);
				target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
			  });
		  // this is used later in the resizing and gesture demos
		  
		  
		  //xoay hinh
		  var angle = 0;

			interact('#rotate-area').gesturable({
			  onmove: function (event) {
				var arrow = document.getElementById('arrow');

				angle += event.da;

				arrow.style.webkitTransform =
				arrow.style.transform =
				  'rotate(' + angle + 'deg)';

				document.getElementById('angle-info').textContent =
				  angle.toFixed(2) + '°';
			  }
			});
			//end xoay hinh
			
			
			//room
			var scale = 1,
				gestureArea = document.getElementById('gesture-area'),
				scaleElement = document.getElementById('scale-element'),
				resetTimeout;

			interact(gestureArea)
			  .gesturable({
				onstart: function (event) {
				  clearTimeout(resetTimeout);
				  scaleElement.classList.remove('reset');
				},
				onmove: function (event) {
				  scale = scale * (1 + event.ds);

				  scaleElement.style.webkitTransform =
				  scaleElement.style.transform =
					'scale(' + scale + ')';

				  dragMoveListener(event);
				},
				onend: function (event) {
				  resetTimeout = setTimeout(reset, 1000);
				  scaleElement.classList.add('reset');
				}
			  })
			  .draggable({ onmove: dragMoveListener });

			function reset () {
			  scale = 1;
			  scaleElement.style.webkitTransform =
			  scaleElement.style.transform =
				'scale(1)';
			}
			//end room
			
		  window.dragMoveListener = dragMoveListener;
		   */
			
			
			/* hold
			tap
			doubletap
			drag, dragstart, dragend, dragup, dragdown, dragleft, dragright
			swipe, swipeup, swipedown, swipeleft, swiperight
			transform, transformstart, transformend
			rotate
			pinch, pinchin, pinchout
			touch
			release
			gesture */
			
			
			
			var myElement = document.getElementById('myElement');
			
			var x_myElement = 0;
			var y_myElement = 0;
			Hammer(myElement).on('dragstart', function(event) {
				
			}).on('drag', function(event){
			  // console.log('drag', event.gesture.deltaX, event.gesture.deltaY)
			  var target = event.target;			
			  $(target).css({
				'transform': 'translate(' + (x_myElement+event.gesture.deltaX) + 'px,' + (y_myElement+event.gesture.deltaY) + 'px)'
			  });
			}).on('dragend', function(event){
			  
				x_myElement = x_myElement+ event.gesture.deltaX;
				y_myElement = y_myElement+ event.gesture.deltaY;
				
			});
			
			
			
			
			
			
			

		
		
		
		
		
		
		
		
		
		
		
		
		
		
});
