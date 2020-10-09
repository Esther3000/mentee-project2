function showSelected(thisObj)
{
 document.getElementById('show').value = thisObj.options[thisObj.selectedIndex].text;
}
function qtySelected(thisObj){
	document.getElementById('output-q').value = thisObj.options[thisObj.selectedIndex].text;
}
function amtSelected(thisObj){
	document.getElementById('output-m').value = thisObj.options[thisObj.selectedIndex].text;
}

 var button = document.querySelector('#button')
 button.addEventListener('click',()=>{
 	    button.style.backgroundColor = 'blue'
 		let num1 = document.getElementById('output-q').value;
 		let num2 = document.getElementById('output-m').value;
 		let total = document.getElementById('output-total');
 		let result = num1*num2;
 		total.value = result;
 	

 });
