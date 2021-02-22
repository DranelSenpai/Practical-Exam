<!DOCTYPE html>
<html>
<body>

<?php

function Arrays (){
	$Names = array ("Marvin", "Marco", "Marvin", "Marco", "Marco", "Marvin", "Christian");
    $NewArr = array();
    
    $Try = array_count_values($Names);
    $Highest = max($Try);
    $TryValues = array_values($Try);
    $TryKeys = array_keys($Try);
    $ArrLength = count($Try);
    
    for ($x = 0; $x < $ArrLength; $x++){
    	if ($TryValues[$x] == $Highest){
            array_push($NewArr,$TryKeys[$x]);
        }
    }
	sort($NewArr);
   	print_r($NewArr);
}

echo Arrays();

?>

</body>
</html>