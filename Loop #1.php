<!DOCTYPE html>
<html>
<body>

<?php
	function SumEven (){
		$Num = 0;
		$Sum = 0;
    
		while ($Num <= 10){
			if ($Num % 2 == 0){
				$Sum = $Sum + $Num;
			}
			$Num++;
		}
		return $Sum;
	}
	
	echo SumEven();
?>

</body>
</html>