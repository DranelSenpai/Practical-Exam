<!DOCTYPE html>
<html>
<body>

<p>Original: TheQuickBrownFoxJumpsOverTheLazyDog</p>

<p id="String">

</p>

<script>
var str = "TheQuickBrownFoxJumpsOverTheLazyDog";
var strLength = str.length;
var rep = 0;
var first = 0;
var x;
var strLetter;
var NewStr = "";

for (x = 0; x < strLength; x++){
	strLetter = str.charAt(x)
    
	if (rep == 0 && first <= 1){
    	if (strLetter == strLetter.toUpperCase()){
            if (first != 1){
            	NewStr = NewStr + strLetter;
            }
            else{
            	NewStr = NewStr + " " + strLetter.toLowerCase();
            }
        	first++;
        }
    	else if (strLetter == strLetter.toLowerCase()){
        	NewStr = NewStr + strLetter.toUpperCase();
        }
    }
    else{
    	if (strLetter == strLetter.toUpperCase()){
        	NewStr = NewStr + " " + strLetter.toLowerCase();
        }
        else{
        	NewStr = NewStr + strLetter;
        }
    }
}

document.getElementById("String").innerHTML = NewStr;

</script>

</body>
</html>