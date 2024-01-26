"use strict";
//styles
let counter = 0;
document.querySelector("#btn").addEventListener("click",() =>{
counter--;//can either be decremented or incremented
document.querySelector("h1").innerHTML = counter;
if(counter%2==0){
	document.querySelector("h2").innerHTML=`${counter} is divisible by two`;
}
});
