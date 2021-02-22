<!DOCTYPE html>
<html>
<body>

<?php

function Arrays (){
	$Colors = array ('red', 'blue', 'black', 'red', 'blue', 'blue', 'red', 'gold');
    $NewArr = array ();
	$Try = array_count_values($Colors);
    $ArrMin = min($Try);
    $TryKeys = array_keys($Try);
    $TryValues = array_values($Try);
    $ArrLength = count($Try);
    
    for ($x = 0; $x < $ArrLength; $x++){
    	if ($TryValues[$x] == $ArrMin){
            array_push($NewArr,$TryKeys[$x]);
        }
    }
    
	sort($NewArr);
    print_r($NewArr);
}

?>
</body>
</html>