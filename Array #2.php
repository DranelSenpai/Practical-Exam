<!DOCTYPE html>
<html>
<body>

<?php

function ArrSorting(){
	$Numbers = array (9863, 7127, 2020, 80, 131, 55, 100);
    sort($Numbers);
   	
    $ArrLength = count($Numbers);
    for ($x = 0; $x < $ArrLength; $x++){
    	if ($Numbers[$x] % 2 != 0){
        	$Quo = $Numbers[$x] / 10;
            $Quo = round($Quo);
            $Quo *= 10;
            
            $Numbers[$x] = $Quo;
        }
    }
    print_r($Numbers);
}

	echo ArrSorting();
?>

</body>
</html>