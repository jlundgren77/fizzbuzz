



function fizzbuzz(n) {
    
	
	
	var num = document.getElementById(n).value;
	var content = document.getElementById("content");
	num = +num;
	console.log(num);
    if (num % 1 != 0){
    	alert("No Deciamls");
    	return false;
    }
    if (num < 1 || num > 100){
    	alert("Number Between 1 and 100");
    	return false;

    }
	for(var i = 1; i <= num; i++) {
		if (i%3 == 0 && i%5 == 0){
			
			content.appendChild(document.createTextNode("fizz buzz"));
			content.appendChild(document.createElement("br"));
		}
		else if (i%3 == 0){
			content.appendChild(document.createTextNode("fizz"));
			content.appendChild(document.createElement("br"));
			
		}
		else if (i % 5 == 0) {
			content.appendChild(document.createTextNode("buzz"));
			content.appendChild(document.createElement("br"));
			
		}
		else{
			content.appendChild(document.createTextNode(i));
			content.appendChild(document.createElement("br"));
			
		}
		
	
	}
	
}
function resetPage() {
	document.getElementById("number").value = "";
	window.location.reload();
}



// $(document).ready(function(){

// 	var content = document.getElementById("content");
// 	for(var i = 1; i <= 100; i++) {
// 		if (i%3 == 0 && i%5 == 0){
			
// 			content.appendChild(document.createTextNode("fizz buzz"));
// 			content.appendChild(document.createElement("br"));
// 		}
// 		else if (i%3 == 0){
// 			content.appendChild(document.createTextNode("fizz"));
// 			content.appendChild(document.createElement("br"));
			
// 		}
// 		else if (i % 5 == 0) {
// 			content.appendChild(document.createTextNode("buzz"));
// 			content.appendChild(document.createElement("br"));
			
// 		}
// 		else{
// 			content.appendChild(document.createTextNode(i));
// 			content.appendChild(document.createElement("br"));
			
// 		}
		
// 	}
// });
