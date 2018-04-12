/*
java.js
J Smolen
12/04/2018
*/
//This Java Script is used to add items to the basket.

var items=[];
var order="";
var quantity=[];
var newItem;
var prices=[];
var sum=0;
var summary


function addProduct(name, price){
	newItem=1;
	for(i=0;i<items.length;i++){
		if(name==items[i]){
			quantity[i]++;
			newItem=0;
		}
	}

	if(newItem==1){
		items.push(name);
		prices.push(price);
		quantity.push(1);
	}

	order="";
	for(i=0;i<items.length;i++){
		order+='<li>' +quantity[i] +'x ' + items[i] +' - ' + quantity[i]*prices[i] + '€' + '</li>';
	}

	document.getElementById("list").innerHTML = order;
}

function pay(){
	summary="ITEMS LIST:\n";
	for(i=0;i<prices.length;i++){
		sum+=prices[i]*quantity[i];
		summary+=quantity[i]+"x		"+items[i]+"		"+prices[i]+"€\n";
	}
	alert(summary+'Total to pay:		'+sum+ '€');

}
