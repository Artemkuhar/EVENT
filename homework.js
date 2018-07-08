/*
1 - отследить распространение клика на таблице и если он 
произошел на ячейке - покрасить её в желтый
произошел на строке - строку в оранжевый
если на теле таблицы - в красный

2 - для блока mouse обработайте наведение на него
при наведении на блок он отъезжает от курсора в какую-либо из сторон
(вверх, вниз, влево, вправо)

3 - для блока keyboard реализуйте его передвижение стрелками клавиатуры


4 - для input сделайте доступным ввод только букв английского языка в
в нижнем и верхнем регистрах
*/



var table = document.body.children[0];

table.onclick = function(event) {
	if(event.target == table.rows[0].cells[0]){
		table.rows[0].style.backgroundColor = 'orange';
	}
	else if(event.target == table.rows[1].cells[0]){
		table.rows[1].style.backgroundColor = 'orange';
	}
	else if(event.target == table.rows[2].cells[0]){
		table.rows[2].style.backgroundColor = 'orange';
	}else if(event.target.tagName == 'TABLE'){
		event.target.style.backgroundColor = 'red';
	}
	else event.target.style.backgroundColor = 'yellow';
};


var mouse = document.getElementById('mouse');
	mouse.onmouseover = function() {
    	mouse.style.marginLeft = Math.floor(Math.random() * 300) + 'px';
    	mouse.style.marginTop = Math.floor(Math.random() * 300) + 'px';
	};

var keyboard = document.getElementById('keyboard');
var left = 0;
var up = 0;
	document.onkeydown = function() {
		if(event.keyCode == 37){
			left -= 20;
			keyboard.style.left = left+'px';
		}else if(event.keyCode == 38) {
			up -= 20;
			keyboard.style.top = up+'px';		
		}else if(event.keyCode == 39) {
			left += 20;
			keyboard.style.left = left+'px';
		}else if(event.keyCode == 40) {
			up += 20;
			keyboard.style.top = up+'px';
		}
	};

var symbol = document.getElementById('symbol');
	symbol.onkeypress = function() {
		 	if(event.charCode < 65 || event.charCode > 90 && event.charCode < 97 || event.charCode > 122) return false;
};















