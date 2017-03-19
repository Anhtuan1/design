
<!DOCTYPE html>
<html>

<head>
  <title>View</title>
  <link rel="icon" href="images/logo.png" type="image/x-icon">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/iphone.css" rel="stylesheet">
  <link href="css/owl.carousel.css" rel="stylesheet">
  <link href="css/owl.theme.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="js/jquery.js" type="text/javascript"></script>
  <script src="js/owl.carousel.js" type="text/javascript"></script>
  <script src="js/bootstrap.min.js" type="text/javascript"></script>
  <script src="js/main.js" type="text/javascript"></script> 
<script>
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
		  items:1
		},
		970:{
		  items:1
		}
	  }
	  
	});	
});
</script>

</head>
<style>

.reviewelement {
	position:absolute;
	margin: auto;
   
}

.reviewelement div{
	position:absolute;
	margin: auto;
    left: 0;
    right: 0;
    top: 0;
	
}
.list-case-show {
	width:100%;
	
	
	float:left;
	
}
.owl-carousel .owl-stage-outer {
	overflow:visible !important;
	top:100px;
}
.owl-carousel .owl-item {
	
}
</style>
<body>
<div class="col-xs-12">
<div style="width:100%;height:50px;">
	<input type="text" value="" id="contentvalue" >
	<button type='summit' id="clickview">View</button>
	
</div>
<div class="owl-carousel">
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "phonecase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, userid, data FROM dataphone ORDER BY id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		$endcode = $row["data"];

?>

	<div class="item">
	
<div  class="list-case-show">
	<section id="content-themes">
		<div class="pecen80" id="case-important">
			<div id="content_html"> 
			
			<?php 
					$content = json_decode($endcode, true);
				
					if($content != ''){ 
						
						for($i =0;$i<count($content);$i++){
							echo "<div style='position: absolute;'> User:". $content[$i]['userId'] ." - Device: ". $content[$i]['device']."  </div>";
							echo "<div id='template-case".$i."'>";								
								$width_device = (($content[$i]['width'])*$content[$i]['zoom'])."px";
								$height_device = (($content[$i]['height'])*$content[$i]['zoom'])."px";
								$background_device = $content[$i]['content']['background'];
								$imagedevice = $content[$i]['imagedevice'];
								$max_width = $content[$i]['widthWindow']."px";
								echo "<div id='template-case-content".$i."' class='reviewelement element'>";
									echo "<div style='width:".$width_device.";height:".$height_device.";background:".$background_device.";'> </div>";
									echo "<div id='phone_content' class='element' style='width:".$max_width."'>";		
				
										echo $content[$i]['content']['element'];
									echo "</div>";
									echo "<div style='width:".$width_device.";height:".$height_device.";border:1px solid #ccc;'><a href='#' class='viewdevice' ><img  src='http://".$imagedevice."'style='width:100%;' /></a></div>";
									
								echo "</div>";
							echo "</div>";
							
						}
					}
					
			?>
			
			</div>
		</div>
	</section>
</div>
	</div>

<?php     
	}
		} else {
		echo "0 results";
	}?>
	</div>
</div>
<script>
$(document).ready(function () {	
	
	$("#clickview").click(function() {	
		$(".viewdevice").toggle();
	});
	$("#clickview").click(function() {
		
		/* var content = JSON.parse(document.getElementById('contentvalue').value);		
		if(content != ''){
			for(var i =0;i<content.length;i++){
				
				$("#content_html").append("<div id='template-case"+i+"'></div>");
				var width_device = ((content[i].width)*content[i].zoom)+'px';
				var height_device = ((content[i].height)*content[i].zoom)+'px';
				var background_device = content[i].content.background;
				var imagedevice = content[i].imagedevice;
				
				$("#template-case"+i).append("<div id='template-case-content"+i+"' class='reviewelement element' style='width:"+ width_device+";height:"+height_device+";background:"+background_device+"'></div>");
				
				$("#template-case-content"+i).append("<div><img src='http://"+imagedevice+"'style='width:100%;'/></div>");
				$("#template-case-content"+i).append(content[i].content.element);
				
			
			}
		} */
		
	
	});
});
</script>
</body>

</html>



<?php 
$conn->close();

?>