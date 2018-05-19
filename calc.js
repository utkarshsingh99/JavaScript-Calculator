var screen = document.getElementById('screenInput');
screen.value='';
var clear = document.getElementById('clear');
clear.addEventListener("click",function(){
	screen.value='';
	a=0;
	b=0;
});

var a = 0, b = 0, listenForB = false, operand = '';

var numbers = [], i = '0', operators = [];
for(;i<10;i++){
	console.log(i);
	numbers[i] = document.getElementById(i);
/*	numbers[i].addEventListener("click",function(){
		screen.innerHTML += i;
	},false);*/
}

numbers[0].addEventListener("click",function(){
		screen.value += '0';
		if(listenForB){
			b = b*10 + 0;
			console.log(b);
		}
	},false);
numbers[1].addEventListener("click",function(){
		screen.value += '1';
		if(listenForB){
			b = b*10 + 1;

			console.log(b);
		}
	},false);
numbers[2].addEventListener("click",function(){
		screen.value += '2';
		if(listenForB){
			b = b*10 + 2;
			console.log(b);
		}
	},false);
numbers[3].addEventListener("click",function(){
		screen.value += '3';
		if(listenForB){
			b = b*10 + 3;
			console.log(b);
		}
	},false);
numbers[4].addEventListener("click",function(){
		screen.value += '4';
		if(listenForB){
			b = b*10 + 4;
			console.log(typeof b);
		}
	},false);
numbers[5].addEventListener("click",function(){
		screen.value += '5';
		if(listenForB){
			b = b*10 + 5;
			console.log(typeof b);
		}
	},false);
numbers[6].addEventListener("click",function(){
		screen.value += '6';
		if(listenForB){
			b = b*10 + 6;
			console.log(b);
		}
	},false);
numbers[7].addEventListener("click",function(){
		screen.value += '7';
		if(listenForB){
			b = b*10 + 7;
			console.log(b);
		}
	},false);
numbers[8].addEventListener("click",function(){
		screen.value += '8';
		if(listenForB){
			b = b*10 + 8;
			console.log(b);
		}
	},false);
numbers[9].addEventListener("click",function(){
		screen.value += '9';
		if(listenForB){
			b = b*10 + 9;
			console.log(b);
		}
	},false);

function answers(){
		a = parseInt(a);
		if(operand === '+'){
			screen.value = a + b; 
		}
		if(operand === '*'){
			screen.value = a * b; 
		}
		if(operand === '/'){
			screen.value = a / b; 
		}
		if(operand === '-'){
			screen.value = a - b; 
		}
		
		return screen.value;
	
}

var answer = document.getElementById('answer');
answer.addEventListener("click",answers);


function operator(){
	operators[0] = document.getElementById('op1');
	operators[1] = document.getElementById('op2');
	operators[2] = document.getElementById('op3');
	operators[3] = document.getElementById('op4');

	operators[0].addEventListener("click", function(){
		a=screen.value;
		if(!listenForB){
			listenForB =true;
		}else{
			a = answers();
			b = 0;
			a = screen.value;
		}

		screen.value+='+';
		operand = '+';
		console.log(a , b);
	},false);
	operators[1].addEventListener("click", function(){
		a=screen.value;
		if(!listenForB){
			listenForB =true;
		}else{
			a = answers();
			b = 0;
			a = screen.value;
		}

		screen.value+='*';
		operand = '*';
		console.log(a , b);
	},false);
	operators[2].addEventListener("click", function(){
		a=screen.value;
		if(!listenForB){
			listenForB =true;
		}else{
			a = answers();
			b = 0;
			a = screen.value;
		}

		screen.value+='/';
		operand = '/';
		console.log(a , b);
	},false);
	operators[3].addEventListener("click", function(){
		a=screen.value;
		if(!listenForB){
			listenForB =true;
		}else{
			a = answers();
			b = 0;
			a = screen.value;
		}
		screen.value+='-';
		operand = '-';

		console.log(a , b);
	},false);	
}


operator();

document.addEventListener("keydown",function(event){
	if((event.keyCode<48||event.keyCode>57)&&(event.keyCode!==8)&&(event.keyCode!==18)&&(event.keyCode!==17)){
		console.log(event.keyCode);
		screen.value='';
		alert("This is a Calculator, please enter a Number!");
	}
});