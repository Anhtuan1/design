

$(document).ready(function () {
	function load_img_phone(){

		
				var phoneCaseDesign0 = document.getElementById('phone-case-design');	 
			
				var heightPhoneCaseDesign0 = phoneCaseDesign0.clientHeight;
						
				var caculater_height = (window.innerHeight-70-150)/heightPhoneCaseDesign0;		
				$(document.getElementById('template-case')).find('img').css({'height':heightPhoneCaseDesign0*caculater_height+'px'})
				
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
				
			
			
	}
});