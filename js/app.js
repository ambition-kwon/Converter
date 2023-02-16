const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const block1 = document.querySelector("#block1");
const blcok2 = document.querySelector("#block2");
const change = document.querySelector("#exchange");
let swap = false;

input1.onkeyup = function(){
	if(swap === false){
		input2.value = input1.value * 1.8 + 32;
	}
	else{
		input2.value = (input1.value - 32) / 1.8;
	}
}
change.onclick = function(){
	if(swap === false){
		[block1.innerHTML, blcok2.innerHTML] = [blcok2.innerHTML, block1.innerHTML];
		input1.value = "";
		input2.value = "";
		swap = true;
	}
	else{
		[block1.innerHTML, blcok2.innerHTML] = [blcok2.innerHTML, block1.innerHTML];
		input1.value = "";
		input2.value = "";
		swap = false;
	}
}

