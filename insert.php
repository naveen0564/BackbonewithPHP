<?php
$json_data = json_decode(file_get_contents('php://input'));
//echo "Helele";
include "datalogin.php";

$BookName=$json_data->{"BookName"};
$Cost=$json_data->{"Cost"};
$Domain=$json_data->{"Domain"};
$Pages=$json_data->{"Pages"};
$Author=$json_data->{"Author"};
$Rating=$json_data->{"Rating"};

mysqli_query($con,"INSERT INTO `user`.`book` (`BookID`, `BookName`, `Cost`, `Domain`, `Pages`, `Author`, `Rating`) VALUES (NULL, '".$BookName."', ".$Cost.", '".$Domain."', ".$Pages.", '".$Author."',".$Rating.");");

mysqli_close($con);
//return true;

?>
