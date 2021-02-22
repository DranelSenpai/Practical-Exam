<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

Employee ID: &emsp;&emsp; <textarea id="EmpID" name="EmpID" rows="1" cols="25"></textarea>
<br>
First Name: &emsp;&emsp;&ensp;&nbsp; <textarea id="FName" name="FName" rows="1" cols="25"></textarea>
<br>
Last Name: &emsp;&emsp;&emsp; <textarea id="LName" name="LName" rows="1" cols="25"></textarea>
<br>
Birthday: &emsp;&emsp;&emsp;&emsp; <textarea id="BDay" name="BDay" rows="1" cols="25"></textarea>
<br>
<br>
Gender:
<input type="radio" id="Male" name="Gender" value="male">
<label for="male">Male</label><br>
&emsp;&emsp;&emsp;&nbsp;
<input type="radio" id="Female" name="Gender" value="male">
<label for="male">Female</label><br><br>
Known Languages:<br>
<input type="checkbox" id="English" name="KnownLanguage" value="English">
<label for="vehicle1">English</label><br>
<input type="checkbox" id="Japanese" name="KnownLanguage" value="Japanese">
<label for="vehicle1">Japanese</label><br>
<input type="checkbox" id="Chinese" name="KnownLanguage" value="Chinese">
<label for="vehicle1">Chinese</label><br>


<script>
function SortAndDisplay() {
	function lNameSort (a,b){
		if (a == b){
    		return 0;
    	}
    	else if (a > b){
    		return 1;
    	}
    	else{
    		return -1;
    	}
	}

var txt = '{ "employees": [{"id":"1", "firstName":"John", "lastName":"Doe", "birthday":"1990-05-07", "gender":{"male":true,"female":false}, "knownLanguage":["English","Japanese","Chinese"]}, {"id":"2", "firstName":"Lina", "lastName":"Art", "birthday":"1994-08-05", "gender":{ "male":false, "female":true}, "knownLanguage":[ "English", "Japanese" ]}]}';

	var obj = JSON.parse(txt);
	var sorted = (obj.employees).sort(lNameSort);
	var EmpID = obj.employees[0]["id"];
	var FName = obj.employees[0]["firstName"];
	var LName = obj.employees[0]["lastName"];
	var BDay = obj.employees[0]["birthday"];

	if (obj.employees[0]["gender"][0] == true){
        document.getElementById("Male").checked = true;
	}
	else{
        document.getElementById("Female").checked = "true";
	}

	var KnownLanguage;
    var x
	for (x = 0; x < 3; x++){
		KnownLanguage = obj.employees[0]["knownLanguage"][x];
    	if (KnownLanguage == "English"){
        	document.getElementById("English").checked = true;
        }
        if (KnownLanguage == "Japanese"){
        	document.getElementById("Japanese").checked = true;
        }
        if (KnownLanguage == "Chinese"){
        	document.getElementById("Chinese").checked = true;
        }
        KnownLanguage = "";  
	}
	document.getElementById("EmpID").value = EmpID;
    document.getElementById("FName").value = FName;
    document.getElementById("LName").value = LName;
    document.getElementById("BDay").value = BDay;
}

SortAndDisplay();
</script>
</body>
</html>
