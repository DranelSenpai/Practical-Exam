<!DOCTYPE html>
<html>
<body>
<?php
function OddNums() {
	$Num = 0;
	do{
    	if ($Num % 2 != 0){
        	echo $Num . "<br>";
        }
        $Num++;
    }while($Num <= 10);
}
	echo OddNums();
?>
</body>
</html>