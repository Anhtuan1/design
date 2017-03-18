<?php 
	$base64_string = $_POST['data'];  
	$data = $base64_string;		
	
	list($type, $data) = explode(';', $data);
	list(, $data)      = explode(',', $data);	
	
	$data2 = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));   
	
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < 15; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }    
	$file = 'upload/' . $randomString . '.png';
	$success = file_put_contents($file, $data2);
	
	echo $file;


?>