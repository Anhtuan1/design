var element_case = [];
var countstring = 0;
var delete_el = '';
var delete_id = '';
var delete_arr = [];
var phoneCaseDesign_height = document.getElementById('phone-case-design').clientHeight;
var phoneCaseDesign_width = document.getElementById('phone-case-design').clientWidth;


var header_height = document.getElementById('headersp').clientHeight;
var button_gate_height = document.getElementById('button-gate').clientHeight;
$(document).ready(function () {	
	

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
		

	
		
		$("#colorpage").hide();
		$("#textpage").hide();
		
		$("#button-background").click(function() {
			$("#backgroundpage").show();		
			document.getElementById('background_input_add').value = '';
		});	
		
		$("#image_photo_add").click(function() {
			$("input[id='my_file']").click();
		});		
		
		$("#color_add").click(function() {
			$("#colorpage").show();
			document.getElementById('fooclor').jscolor.show();	
		});
		
		
		$("#text_add").click(function() {
			$("#textpage").show();		
			
			$(document.getElementById('font_family_text')).css({'height':(window.innerHeight-170)/2+'px'});	
			
			document.getElementById('foo').jscolor.show();			
		
		});	
		
		
		
		$("#stamp_add").click(function() {
			$("#stamppage").show();		
			document.getElementById('stamp_input_add').value = '';
		});	
		
		/*  $("#rect").click(function() {
			element_case[0] = new hammer_code('rect');
		});  */
		
			
		/***************font text *********/
		setTimeout(function () { 
			load_img_phone();		
		},100);
		
		
		$("#font_family_text a").click(function(ev) {
			$("#text_input_add").removeClass();
			$("#text_input_add").addClass(this.getAttribute("fontcase"));
			
		});
		
		$("#stamppage a").click(function(ev) {
			document.getElementById('stamp_input_add').value = 	this.getAttribute("imgstamp");	
			document.getElementById('phone_content').innerHTML += "<div id='rect"+countstring+"_view'><img src='"+document.getElementById('stamp_input_add').value+"' style='width:240px;'/></div>" ;		    
			element_case[countstring] = "rect"+countstring;
			setTimeout(function () {	
				var height_stamp = document.getElementById('rect'+countstring+'_view').clientHeight;
				var width_stamp = document.getElementById('rect'+countstring+'_view').firstChild.clientWidth;
				document.getElementById('myElement').innerHTML += "<div id='rect"+countstring+"' style='width:"+width_stamp+"px;height:"+height_stamp+"px'/></div>" ;			
			   countstring++;		   
			   runEvent(element_case);
			},300);						
			
			$("#stamppage").hide();
		});
		
		$("#backgroundpage a").click(function(ev) {
			document.getElementById('background_input_add').value = this.getAttribute("imgbackground");	
			$(document.getElementById('phone-background')).css({'background':'url('+document.getElementById('background_input_add').value+')'});						
			
			$("#backgroundpage").hide();
		});
		
		var element_case_text = [];
		var countstring2 = 0;
		$("#add_content_text").click(function(ev) { 
			document.getElementById('phone_content').innerHTML += "<div id='rect"+countstring+"_view'><span class='"+document.getElementById('text_input_add').getAttribute('class')+"' style='color:"+document.getElementById('text_input_add').style.color+"'/>"+ document.getElementById('text_input_add').value+" </span></div>" ;		    
			
				var height_text = document.getElementById('rect'+countstring+'_view').clientHeight;
				var width_text = document.getElementById('rect'+countstring+'_view').clientWidth;			
				document.getElementById('myElement').innerHTML += "<div id='rect"+countstring+"' style='width:"+width_text+"px;height:"+height_text+"px'></div>" ;		    
				element_case[countstring] = "rect"+countstring;
				countstring++;		   
				runEvent(element_case);				
			
			
			document.getElementById('foo').jscolor.died();
			$("#textpage").hide();
			
		});
			
		$("#cancel_content_background").click(function(ev) { 
			document.getElementById('background_input_add').value = '';
			$("#backgroundpage").hide();
		
		}); 
			
		 $("#cancel_content_stamp").click(function(ev) { 
			document.getElementById('stamp_input_add').value = '';
			$("#stamppage").hide();
		
		}); 
		
		$("#cancel_content_text").click(function(ev) { 
			document.getElementById('foo').jscolor.died();
			$("#textpage").hide();		
		}); 
		
		$("#cancel_content_color").click(function(ev) {
			document.getElementById('fooclor').jscolor.died();
			$("#colorpage").hide();		
		});
		
		$("#add_content_color").click(function(ev) {
			$(document.getElementById('phone-background')).css({'background':'#'+document.getElementById('fooclor').value});	
			document.getElementById('fooclor').jscolor.died();
			$("#colorpage").hide();
		});
		
		$("#delete_el").click(function(ev) {
			if(delete_el !=''){
				document.getElementById(delete_el).remove();
				document.getElementById(delete_el+'_view').remove();
				delete_arr.push(delete_id);
				delete_el = '';
			}	
		});
		
		$("#up_el").click(function(ev) {
			if(delete_el !=''){
				
				var up_rect = document.getElementById(delete_el);
				var up_rect_view = document.getElementById(delete_el+'_view');
				var mid_up_rect = $(up_rect).next();
				var mid_up_rect_view = $(up_rect_view).next();
				if(mid_up_rect.length != 0){
					document.getElementById(delete_el).remove();
					document.getElementById(delete_el+'_view').remove();
					mid_up_rect.after(up_rect);
					mid_up_rect_view.after(up_rect_view);					
				} 
				
				
			}	
		});
		
		$("#down_el").click(function(ev) {
			if(delete_el !=''){
				
				var down_rect = document.getElementById(delete_el);
				var down_rect_view = document.getElementById(delete_el+'_view');
				var mid_down_rect = $(down_rect).prev();
				var mid_down_rect_view = $(down_rect_view).prev();
				if(mid_down_rect.length != 0){
					document.getElementById(delete_el).remove();
					document.getElementById(delete_el+'_view').remove();
					mid_down_rect.before(down_rect);
					mid_down_rect_view.before(down_rect_view);					
				} 
				console.log(mid_down_rect)
				
			}	
		});
		
});

function updatecolor(jscolor) {
	// 'jscolor' instance can be used as a string
	document.getElementById('text_input_add').style.color = '#' + jscolor;
	//document.getElementById("text_input_add").getAttribute("color") = '#' + jscolor;
}



function runEvent(element_case){
	var runev = [];
	
	for(var i=0;i<element_case.length;i++){
		
		
		if(delete_arr.indexOf(i) == '-1'){
			
			runev[i] = hammer_code(element_case[i]);	
			
			$("#"+element_case[i]).click(function() {
				delete_el = this.id;
				delete_id = parseInt(this.id.split('rect')[1]);		
				//$('#'+delete_el+'_view').css({'border':'1px solid #000'});
				console.log(delete_el);
			});
			
		}
		
		
	}
}


function runEvent_Text(element_case){
	var runev = [];
	for(var i=0;i<element_case.length;i++){
		//console.log(element_case[i]);
		runev[i] = hammer_code(element_case[i]);
		
	}
}

var hammer_code = function(idcode) {
	
			var reqAnimationFrame = (function () {
				return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
			})();

			var log = document.querySelector("#log");
			var el = document.querySelector("#"+idcode);
			var el2 = document.querySelector("#"+idcode+"_view");

			

			var ticking = false;
			var transform;
			var timer;

			var mc = new Hammer.Manager(el);

			mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

			mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
			mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
			mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

			mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
			mc.add(new Hammer.Tap());

			mc.on("panstart panmove", onPan);
			mc.on("rotatestart rotatemove", onRotate);
			mc.on("pinchstart pinchmove", onPinch);
			mc.on("panend", onPanend);
			mc.on("pinchend", onPinchend);
			mc.on("rotateend", onRotateend);
			mc.on("swipe", onSwipe);
			mc.on("swipeend", onSwipeend);
			mc.on("tap", onTap);
			mc.on("tapend", onTapend);
			mc.on("doubletap", onDoubleTap);

			mc.on("hammer.input", function(ev) {
				if(ev.isFinal) {
					//resetElement();
				}
			});
			//var START_X = Math.round((window.innerWidth - el.offsetWidth) / 2);
			var phoneCaseDesign = document.getElementById('phone-case-design');
			var heightPhoneCaseDesign = phoneCaseDesign.clientHeight;			
			var START_X = 0;
		    var START_Y = parseInt((heightPhoneCaseDesign - el2.clientHeight) / 2);
		    //var START_Y = 0;
			//translate3d(-304px, 391px, 0px) scale(1, 1) rotate3d(0, 0, 0, 0deg)
			//translate3d(-304px, 391px, 0px) scale(1, 1) rotate3d(0, 0, 0, 0deg)
			
			var scale_mid = 1;
			var angle_mid = 0;
			var rx_mid = 0;
			var ry_mid = 0;
			var rz_mid = 0;
			
			var arr = el.style.transform.split(" ");
			
			if(arr.length==9){				
				START_X = parseFloat(arr[0].split("translate3d(")[1]);
				START_Y = parseFloat(arr[1]);
				scale_mid = parseFloat(arr[4]);
				rx_mid = parseFloat(arr[5].split("rotate3d(")[1]);
				ry_mid = parseFloat(arr[6].split(",")[0]);
				rz_mid = 1;
				angle_mid = parseFloat(arr[8]);	
				//alert("x"+START_X+"Y"+START_Y+" scale_mid "+ scale_mid+" rx_mid "+arr[5]+" ry_mid "+arr[6]+" ry_z "+ry_z+" angle_mid "+angle_mid);				
			}
			
			function resetElement() {				
				
				el.className = 'animate';
				transform = {
					translate: { x: START_X, y: START_Y },
					scale: scale_mid,
					angle: angle_mid,
					rx: rx_mid,
					ry: ry_mid,
					rz: rz_mid
				};
		
				requestElementUpdate();

				if (log.textContent.length > 2000) {
					log.textContent = log.textContent.substring(0, 2000) + "...";
				}
			}

			function updateElementTransform() {
				
				var value = [
							'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
							'scale(' + transform.scale + ', ' + transform.scale + ')',
							'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
				];

				value = value.join(" ");
				//el.textContent = value;
				el.style.webkitTransform = value;
				el.style.mozTransform = value;
				el.style.transform = value;
				
				el2.style.webkitTransform = value;
				el2.style.mozTransform = value;
				el2.style.transform = value;
				ticking = false;
			}

			function requestElementUpdate() {
				if(!ticking) {
					reqAnimationFrame(updateElementTransform);
					ticking = true;
					
				}
			}

			function logEvent(str) {
				//log.insertBefore(document.createTextNode(str +"\n"), log.firstChild);
			}

			function onPan(ev) {
				el.className = '';
				transform.translate = {
					x: START_X + ev.deltaX,
					y: START_Y + ev.deltaY
				};
				
				requestElementUpdate();
				//logEvent(ev.type);
			}
			function onPanend(ev) {
				el.className = '';
				
				START_X = transform.translate.x
				START_Y = transform.translate.y;
				requestElementUpdate();				
				
			}
			var initScale = 1;
			function onPinch(ev) {
				if(ev.type == 'pinchstart') {
					initScale = transform.scale;
				}

				el.className = '';
				transform.scale = initScale * ev.scale;
				//scale_mid = initScale * ev.scale;
				requestElementUpdate();
				//logEvent(ev.type);
			}
			
			function onPinchend(ev) {			
		
				el.className = '';			
				scale_mid = transform.scale;
				
				requestElementUpdate();
				//logEvent(ev.type);
			}
			
			
			var initAngle = angle_mid;
			var rotate_mid = 0;
			function onRotate(ev) {
				
				if(ev.type == 'rotatestart') {
					initAngle = transform.angle;
					rotate_mid = ev.rotation;
				}				
				el.className = '';
				transform.rz = 1;
				transform.angle = initAngle + ev.rotation - rotate_mid;					
				requestElementUpdate();									
			}
			
			function onRotateend(ev) {				

				el.className = '';				
				angle_mid = transform.angle;
				//rz_mid = transform.rz;
				requestElementUpdate();
				//logEvent(ev.type);
			
			
			}
			var anglexl = 0;
			function onSwipe(ev) {
				
				/* transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL);
				transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL); */
				//transform.angle = (ev.direction & (Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP));
				

				clearTimeout(timer);
				/* timer = setTimeout(function () {
					//resetElement();
				}, 5000); */
				requestElementUpdate();
				//logEvent(ev.type);
			}
			
			function onSwipeend(ev) {
				
				/* ry_mid = transform.ry;
				rx_mid = transform.rx; */
				//angle_mid = transform.angle;
				
				requestElementUpdate();
				//logEvent(ev.type);
			}

			function onTap(ev) {
				//transform.rx = 1;
				//transform.angle = 0;

				clearTimeout(timer);
				/* timer = setTimeout(function () {
					//resetElement();
				}, 500); */
				//requestElementUpdate();
				//logEvent(ev.type);
			}
			
			function onTapend(ev) {
				/* rx_mid = transform.rx ; */
				//angle_mid = transform.angle;

				clearTimeout(timer);
				
				//requestElementUpdate();
				//logEvent(ev.type);
			}
			
			
			function onDoubleTap(ev) {
				//transform.rx = 1;
				transform.angle = 0;

				clearTimeout(timer);
				timer = setTimeout(function () {
					//resetElement();
				}, 500);
				requestElementUpdate();
				//logEvent(ev.type);
			}

			resetElement();
	
}


function previewFile(){
   //var preview = document.querySelector('img'); //selects the query named img
   
   var file    = document.querySelector('input[type=file]').files[0]; //sames as here
   var reader  = new FileReader();
	
	   reader.onloadend = function () {
		    document.getElementById('phone_content').innerHTML += "<div><img id='rect"+countstring+"_view' class='uploadimg' src='"+ reader.result+"'/></div>" ;		    
		   	setTimeout(function () {	    
				element_case[countstring] = "rect"+countstring;
				var height_text = document.getElementById('rect'+countstring+'_view').clientHeight;
				var width_text = document.getElementById('rect'+countstring+'_view').clientWidth;
				document.getElementById('myElement').innerHTML += "<div id='rect"+countstring+"' src='"+ reader.result+"' style='width:"+width_text+"px;height:"+height_text+"px'/></div>" ;			
			   countstring++;		   
			   runEvent(element_case);
			},300)
		  
	   }

	   if (file) {
		   reader.readAsDataURL(file); //reads the data as a URL
	   } else {
		  // preview.src = "";
	   }
 } 
 
 
 function load_img_phone(){

		
		var phoneCaseDesign0 = document.getElementById('phone-case-design');	 
	
		var heightPhoneCaseDesign0 = phoneCaseDesign0.clientHeight;
		
		phoneCaseDesign_height = document.getElementById('phone-case-design').clientHeight;
		phoneCaseDesign_width = document.getElementById('phone-case-design').clientWidth;	

		var caculater_height = (window.innerHeight-header_height-button_gate_height-40)/heightPhoneCaseDesign0;		
		$(document.getElementById('template-case')).find('img').css({'height':heightPhoneCaseDesign0*caculater_height+'px'});
		
		var phoneCaseDesign = document.getElementById('phone-case-design');	 
		
		var heightPhoneCaseDesign = phoneCaseDesign.clientHeight;
		var widthPhoneCaseDesign = phoneCaseDesign.clientWidth;	
		
		$('.pecen80').css({'height':heightPhoneCaseDesign+'px'});
		var widthWindow = window.innerWidth;
		var heightWindow = window.innerHeight;		
		var divWhiteWidth = 	((widthWindow-widthPhoneCaseDesign)/2);	
		var divWhiteHeight = 	heightPhoneCaseDesign;	
		document.getElementById("divwhite1").innerHTML = "<div class='background-white' style='left:0;top:0;background:#fff;position:absolute; width:"+divWhiteWidth+"px;height:"+divWhiteHeight+"px' ></div>";
		document.getElementById("divwhite2").innerHTML = "<div class='background-white' style='left:"+(widthPhoneCaseDesign+divWhiteWidth)+"px;top:0;background:#fff;position:absolute; width:"+divWhiteWidth+"px;height:"+divWhiteHeight+"px' ></div>";
		
		
		$(document.getElementById('phone-background')).css({'height':phoneCaseDesign.clientHeight+'px','width':phoneCaseDesign.clientWidth+'px'});
		
		
	
}

