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

//$getdata = $_POST['data'];
$sql = "INSERT INTO `dataphone` (`userid`, `data`) VALUES ('1234', 'test')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



//return $getdata;
$conn->close();

?>