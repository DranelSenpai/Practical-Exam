<!DOCTYPE html>
<html>
<body>

<?php
	function Fibonacci(){
		$Num1 = 0;
		$Num2 = 1;
		$temp1;
		$temp2;
    
		for ($x = 1; $x <= 5; $x++){
			echo $Num1 . ", ";
			echo $Num2 . ", ";
        
			$temp1 = $Num1 + $Num2;
			$temp2 = $temp1 + $Num2;
        
			$Num1 = $temp1;
			$Num2 = $temp2;
		}
	}
	
echo Fibonacci();

?>

</body>
</html>