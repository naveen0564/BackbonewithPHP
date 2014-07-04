<?php
include 'datalogin.php';
$result = mysqli_query($con,"select *from book");
$data=array();
while($row = mysqli_fetch_array($result))
{
$data[]=$row;
}

echo json_encode($data);

?>
