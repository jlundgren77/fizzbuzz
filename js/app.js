// function fizzbuzz() {
// 	var num = document.getElementById("number").value;
// 	var content = document.getElementById("content");
// 	for(var i = 1; i <= num; i++) {
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
	
// }
// function resetPage() {
// 	document.getElementById("number").value = "";
// 	window.location.reload();
// }
$(document).ready(function(){

	var content = document.getElementById("content");
	for(var i = 1; i <= 100; i++) {
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
});
v