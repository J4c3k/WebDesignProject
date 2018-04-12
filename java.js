/*
java.js
J Smolen
12/04/2018
*/
//This Java Script is used to add items to the basket.



function addProduct(name){
	array[array.length]=name;
	for (i = 0; i < array.length; i++) {
    	text = "<li>" + array[i] + "</li>";
	}
	document.getElementById("list").innerHTML = text;
}
