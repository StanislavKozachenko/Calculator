//Begining!
//by Stanislav Kozacheko - https://github.com/StanislavKozachenko/
var main = document.getElementById('Input');
function Clear() {
	main.innerHTML = '';
}
function Plus_9(){

	main.innerHTML += '9';
}
function Plus_8(){
	main.innerHTML += '8';
}
function Plus_7(){
	main.innerHTML += '7';
}
function Plus_6(){
	main.innerHTML += '6';
}
function Plus_5(){
	main.innerHTML += '5';
}
function Plus_4(){
	main.innerHTML += '4';
}
function Plus_3(){
	main.innerHTML += '3';
}
function Plus_2(){
	main.innerHTML += '2';
}
function Plus_1(){
	main.innerHTML += '1';
}
function Plus_tochka() {
	main.innerHTML += '.';
}
function Plus_0() {
	main.innerHTML += '0';
}
function Pow(){
	var text = $('#Input').html();
	text = parseInt(text);
	text = text * text;
	main.innerHTML = text;
}
function Plus(){
	main.innerHTML += ' + ';
}
function Minus(){
	main.innerHTML += ' - ';
}
function Delenie(){
	main.innerHTML += ' / ';
}
function Umn() {
	main.innerHTML += ' * ';
}
function Result(){
	var Results = $('#Input').html();
	Results = eval(Results);
	main.innerHTML = Results;
}
