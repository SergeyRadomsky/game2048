'use strict'

// let score = document.getElementById("score01")
let status = 1
let gameover = 0
let score = 0
let x = 4, y = 4;
let massive = [];

for (let i = 0; i < y; i++){
  massive[i] = [];
  for (let j = 0; j < x; j++){
    massive[i][j] = 0;
  }
}

// massive[0][1] = 2
massive[1][2] = 2
massive[1][3] = 2

// function randomNum() {       // Метод генерации случайных чисел и присвоения начального случайного числа mydata
//   for(;;){                     // Циклу for здесь нельзя задать фиксированное условие, потому что конечное условие не может быть известно, когда игра запущена, и он может работать только последовательно
//     let x = Math.floor(Math.random()*4);      // Задаем случайную величину и пусть это будет координата, в которой число появляется случайным образом
//     let y = Math.floor(Math.random()*4);
//     if(massive[y][x] == 0) {               // Если значение в текущей координате в данных равно 0 или пусто, вставляем случайное число 2 или 4
//       let num = Math.random() > 0.75 ? 4 : 2;     // Установленное случайное число 2 или 4 имеет одинаковый шанс выпадения, наполовину открыто
//       massive[y][x] = num;
//       break;
//     }
//   }
// }

function dataView() {      // Метод передачи данных на страницу и контроль смены стиля
  for(let y = 0; y < 4; y++){
    for(let x = 0; x < 4; x++){
      let div = document.getElementById("c" + y + x);
      if (massive[y][x] == 0) {
        div.innerHTML = "";
        div.className = "cell";
      }
      else {
        div.innerHTML = massive[y][x];
        div.className = 'cell n'+ massive[y][x];
      }
    }
  }
}

let mass = []
for (let i = 0; i < y; i++){
  mass[i] = 0;
}

// mass[0] = 4
// mass[1] = 2
// mass[2] = 2
// mass[3] = 0

// mass[0] = 2
// mass[1] = 2
// mass[2] = 2
// mass[3] = 0

mass[0] = 4
mass[1] = 4
mass[2] = 4
mass[3] = 4

console.log(`изначальный массив ${mass}`);

// for (let i = 0; i < mass.length; i++) {
// if (typeof(mass[i+1]) == "undefined") {






















function moveLeft() {
// убираю все 0 из массива 
let deleteMass = (qwe) => {
	return qwe.filter(elem => elem != 0)
}
console.log(`массив без 0 через функцию ${deleteMass(mass)}`);
let resultmass = deleteMass(mass)

//суммирую нужные элементы влево
let sumLeftElemnts = (resultmass) => {
	for (let i = 0; i < resultmass.length; i++) {
		if (resultmass[i+1] != undefined) {
			console.log("E");
			if (resultmass[i] == resultmass[i+1]) {
					score += resultmass[i] + resultmass[i+1]
					resultmass[i] = resultmass[i] * 2
					resultmass[i + 1] = 0
					i++
				}
		}
		// console.log("helo");
	}
	// console.log(resultmass);
	return (resultmass);
}
//  sumLeftElemnts(resultmass)

resultmass = sumLeftElemnts(resultmass)
console.log(resultmass)
resultmass = deleteMass(resultmass)
console.log(resultmass)
// console.log(sumLeftElemnts(resultmass))
// console.log(sdvigLeft(deleteMass(sumLeftElemnts(resultmass))))


// Далее сдвигаю все элементы влево
let sdvigLeft = (resultmass) => {
	if (resultmass.length == 0) {
		resultmass.push(0,0,0,0)
	}
	else if (resultmass.length > 0 && resultmass.length <= 1) {
		resultmass.push(0,0,0)
	}
	else if (resultmass.length > 1 && resultmass.length <= 2) {
		resultmass.push(0,0)
	}
	else if (resultmass.length > 2 && resultmass.length <= 3) {
		resultmass.push(0)
	}
	else  if (resultmass.length > 3 && resultmass.length <= 4) {
		resultmass
	}
	return resultmass
}

resultmass = sdvigLeft(resultmass)
// return sdvigLeft(resultmass)

let perem = sdvigLeft(resultmass)
	console.log(perem)
// return mass
// perem[3] = 1
mass = perem
return(mass)
}


let moveRight = () => {
	// mass.reverse
	// console.log(mass.reverse());

	let deleteMass = (qwe) => {
		return qwe.filter(elem => elem != 0)
	}
	deleteMass(mass)
	let resultmass = deleteMass(mass)
	// console.log(resultmass)
	console.log(resultmass + " массив после удаления нулей")

	// resultmass = deleteMass(mass)
	// console.log(`массив без 0 через функцию ${deleteMass(mass)}`);

	//суммирую нужные элементы
	let sumRightElements = (resultmass) => {
		for (let i = resultmass.length; i >= 0; i--) {
			if (resultmass[i-1] != undefined) {
				console.log(resultmass[i])
				if (resultmass[i] == resultmass[i-1]) {
					score += resultmass[i] + resultmass[i-1]
					resultmass[i] = resultmass[i] * 2
					resultmass[i - 1] = 0
					i--
				}
			}
		}
		return(resultmass)
			console.log(resultmass);
	}

	resultmass = sumRightElements(resultmass)
	console.log(resultmass)
	resultmass = deleteMass(resultmass)
	console.log(resultmass)



	let sdvigRight = (resultmass) => {
	if (resultmass.length == 0) {
		resultmass.unshift(0,0,0,0)
	}
	else if (resultmass.length > 0 && resultmass.length <= 1) {
		resultmass.unshift(0,0,0)
	}
	else if (resultmass.length > 1 && resultmass.length <= 2) {
		resultmass.unshift(0,0)
	}
	else if (resultmass.length > 2 && resultmass.length <= 3) {
		resultmass.unshift(0)
	}
	else  if (resultmass.length > 3 && resultmass.length <= 4) {
		resultmass
	}
	return resultmass
}

resultmass = sdvigRight(resultmass)
// return sdvigLeft(resultmass)

let perem = sdvigRight(resultmass)
	console.log(perem)
// return mass
// perem[3] = 1
mass = perem
return(mass)

	// sumRightElements(resultmass)
	// 	console.log(resultmass);
	// 	return (resultmass);
	// console.log(sumRightElements(resultmass))
}







document.onkeydown = function(event){
	if (event.keyCode == 37) {
		moveLeft();
	}
	else if (event.keyCode == 38) {
		// moveLeft();
	}
	else if (event.keyCode == 39) {
		moveRight();	
	}
	else if (event.keyCode == 40) {
		// moveBottom();
	}
}










// console.log(`массив без нулей ${deleteMass(perem)}`);
// console.log(score);
// let resultSdvigLeft = sdvigLeft()
// resultSdvigLeft.sdvigLeft
// console.log(resultSdvigLeft);
// console.log(sdvigLeft())











// баг с двумя 0
// function sumRightElemnts() {
// 	for (let i = 0; i < mass.length; i++) {
// 		let nextValue = 0
// 		let previosValue = 0
// 		if (typeof(mass[i-1]) != undefined) {
// 			previosValue = mass[i-1]
// 		}
// 		if (typeof(mass[i+1]) != undefined)
// 		if ((mass[i] != 0) && (typeof(mass[i]) != undefined)) {
// 			if (nextValue == mass[i]) {
// 				mass[i] += nextValue
// 				mass[i+1] = 0
// 			}
// 		}
// 	}
// 	console.log(mass);
// }
// sumRightElemnts()

// checkedNextValueLeft()








// function checkedNextValueRigth() {
// 	for (let i = 3; i >= 0; i--) {
// 		let nextValue = mass[i+1]
// 		let previosValue = mass[i-1]
// 		if ((mass[i] != 0) && (typeof(mass[i]) != undefined) && (nextValue != undefined)) {
// 			if (nextValue == mass[i]) {
// 				mass[i] += nextValue
// 				mass[i + 1] = 0
// 				if (1)	{

// 				}
// 			}
// 			// console.log(nextValue);
// 			// console.log(previosValue);
// 			// console.log(mass[i]);
// 			// console.log(mass[i++]);
// 			// let nextValue = mass[i++]
// 			// if (nextValue = "undefined") {
// 			// 	console.log(typeof(`${nextValue}`))
// 			// }
// 		}
// 	}
// 	console.log(mass);
// }
// checkedNextValueRigth()

// function sdvigRowLeft() {
// 	for (let i = )
// }

	// function getNEXTinRow(r,c){
	// 	for(var i = c+1;i < 4;i++){
	// 		if (this.mydata[r][i] != 0) {
	// 			return i;
	// 		}
	// 	}
	// 	return -1;
	// },


//сдвиг в строке
// function sdvigLeft() {
// 	let after = 0
// 	let before
// 	let i = 1
// 	for (let j = 0; j < 4; j++) {
// 		if (massive[i][j] != 0) {
// 			let actual = massive[i][j]
// 			// console.log(`${j}`);
// 			console.log(`${actual}`);
// 		}
// 	}
// }
// sdvigLeft()



// function findColumn() {
// for (let i = 0; i < 4; i++ ) {
// 	for (let j = 0; j < 4; j++) {
// 			if (massive[i][j] != 0) {
// 				// if (massive[i][j] )
// 				console.log("find");
// 				break
// 			}
// 			else console.log("no");
// 		}
// 	}
// }
// findColumn()


// получал значения по Х
// function sdvig() {
// 	let previosValue = 0
// 	let nextValue = 0
// 	let j = 3
// 	for (let i = 0; i < 4; i++) {
// 		if (massive[i][j] != 0) {
// 			console.log(massive[i][j])
// 		}
// 	}
// }
// sdvig()



















// function moveUp() {
// 	for (let i = 0; i < 4; i++) {
// 		for (let j = 0; j < 4; j++) {
// 			let nextc = 0;
// 			if (massive[0+i][0+j] = 0) {
// 				console.log("FUCK");
// 				break
// 			}
// 			else if (massive[0+i][0+j] != 0) {
// 				console.log("no FUCK");
// 			}
// 		}
// 	}
// }

// moveUp()

// if (massive[i] != 0) {
// 	console.log(massive[i]);
// }
	
	// if (massive[j][i]) {
	// 	console.log(`hello ${massive[j][i]}`);
	// }





  // document.getElementById('score01').innerHTML = score;
  // if (status == gameover) {
  //   document.getElementById('score02').innerHTML = score;
  //   document.getElementById('gameover').style.display = 'block';
  // }
  // else{
  //   document.getElementById('gameover').style.display = 'none';
  // }

// randomNum()
// randomNum()


// moveUp()
dataView()
// console.log(massive);

// console.log(massive[0][0] + ` 1 элемент`)
// console.log(massive[0][1] + ` 2 элемент`)
// console.log(massive[0][2] + ` 3 элемент`)
// console.log(massive[0][3] + ` 4 элемент`)
// console.log(massive[1][0] + ` 5 элемент`)
// console.log(massive[1][1] + ` 6 элемент`)
// console.log(massive[1][2] + ` 7 элемент`)
// console.log(massive[1][3] + ` 8 элемент`)
// console.log(massive[2][0] + ` 9 элемент`)
// console.log(massive[2][1] + ` 10 элемент`)
// console.log(massive[2][2] + ` 11 элемент`)
// console.log(massive[2][3] + ` 12 элемент`)
// console.log(massive[3][0] + ` 13 элемент`)
// console.log(massive[3][1] + ` 14 элемент`)
// console.log(massive[3][2] + ` 15 элемент`)
// console.log(massive[3][3] + ` 16 элемент`)





// function start() {
  
//   }

// console.log(score.textContent = 110);
// console.log(Xmatrix[0][Ymassive]);

















// var game ={
// 	mydata: [],     // Добавляем атрибут mydata для хранения игровых данных
// 	score: 0,	  	   // Добавляем атрибут оценки
// 	gameover: 0,	    // Добавляем состояние в конце игры 
// 	gamerrunning:1,	     // Добавляем состояние, когда игра запущена
// 	status:1,		      // Добавляем состояние игры
// 	start:function (){      // Устанавливаем метод при запуске игры
// 		this.status = this.gamerrunning;
// 		this.score = 0;
// 		this.mydata = [];  
// 		for(var r = 0;r < 4; r++){  // Добавьте число 0 к переменной цикла массива mydata, чтобы сделать его двумерным массивом
// 			this.mydata[r] = [];
// 			for(var c = 0;c < 4;c++){
// 				this.mydata[r][c] = 0;
// 			}
// 		}
// 		this.randomNum();    // Число 2/4 генерируется случайным образом в начале игры
// 		this.randomNum();
// 		this.dataView();     // Выполняем функцию dataView, когда игра начинает передавать обновление данных на страницу, обновляем данные на странице
// 		// console.log(this.mydata);
// 	},

// 	randomNum:function(){       // Метод генерации случайных чисел и присвоения начального случайного числа mydata
// 		for(;;){                     // Циклу for здесь нельзя задать фиксированное условие, потому что конечное условие не может быть известно, когда игра запущена, и он может работать только последовательно
// 			var r = Math.floor(Math.random()*4);      // Задаем случайную величину и пусть это будет координата, в которой число появляется случайным образом
// 			var c = Math.floor(Math.random()*4);
// 			if(this.mydata[r][c] == 0){               // Если значение в текущей координате в данных равно 0 или пусто, вставляем случайное число 2 или 4
// 				var num = Math.random() > 0.5 ? 2 : 4;     // Установленное случайное число 2 или 4 имеет одинаковый шанс выпадения, наполовину открыто
// 				this.mydata[r][c] = num;
// 				break;
// 			}
// 		}
// 	},


// 	dataView:function(){      // Метод передачи данных на страницу и контроль смены стиля
// 		for(var r = 0;r < 4;r++){
// 			for(var c = 0;c < 4;c++){
// 				var div = document.getElementById("c" + r + c);
// 				if (this.mydata[r][c] == 0) {
// 					div.innerHTML = "";
// 					div.className = "cell";
// 				}
// 				else {
// 					div.innerHTML = this.mydata[r][c];
// 					div.className = 'cell n'+this.mydata[r][c];
// 				}
// 			}
// 		}
// 		document.getElementById('score01').innerHTML = this.score;
// 		if (this.status == this.gameover) {
// 			document.getElementById('score02').innerHTML = this.score;
// 			document.getElementById('gameover').style.display = 'block';
// 		}
// 		else{
// 			document.getElementById('gameover').style.display = 'none';
// 		}
// 	},

// 	isgameover:function(){
// 		for(var r = 0;r < 4;r++){
// 			for(var c = 0;c < 4;c++){	
// 				if (this.mydata[r][c] == 0) {
// 					return false;
// 				}
// 				if (c<3) {
// 					if (this.mydata[r][c] == this.mydata[r][c+1]) {
// 						return false;
// 					}
// 				}
// 				if (r<3) {
// 					if (this.mydata[r][c] == this.mydata[r+1][c]) {
// 						return false;
// 					}
// 				}
// 			}
// 		}
// 		return true;
// 	},

// 	//Движение влево
// 	moveLeft:function(){
// 		var before = String(this.mydata);
// 		for(var r = 0;r < 4;r++){
// 			this.moveLeftInRow(r);
// 		}
// 		var after = String(this.mydata);
// 		if (before != after) {
// 			this.randomNum();
// 			if (this.isgameover()) {
// 				this.status = this.gameover;
// 			}
// 			this.dataView();
// 		}
// 	},

// 	moveLeftInRow:function(r){
// 		for(var c = 0;c < 3;c++){	
// 			var nextc = this.getNEXTinRow(r,c);
// 			if (nextc != -1) {
// 				if (this.mydata[r][c] == 0) {
// 					this.mydata[r][c] = this.mydata[r][nextc];
// 					this.mydata[r][nextc] = 0;
// 					c--;
// 				}
// 				else if (this.mydata[r][c] == this.mydata[r][nextc]) {
// 					this.mydata[r][c] *=2;
// 					this.mydata[r][nextc] =0;
// 					this.score += this.mydata[r][c];
// 				}
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 	},

// 	getNEXTinRow:function(r,c){
// 		for(var i = c+1;i < 4;i++){
// 			if (this.mydata[r][i] != 0) {
// 				return i;
// 			}
// 		}
// 		return -1;
// 	},


// 	//Переместить вправо
// 	moveRight:function(){
// 		var before = String(this.mydata);
// 		for(var r = 0;r < 4;r++){
// 			this.moveRightInRow(r);
// 		}
// 		var after = String(this.mydata);
// 		if (before != after) {
// 			this.randomNum();
// 			if (this.isgameover()) {
// 				this.status = this.gameover;
// 			}
// 			this.dataView();
// 		}
// 	},

// 	moveRightInRow:function(r){
// 		for(var c = 3;c > 0;c--){	
// 			var nextc = this.RightgetNEXTinRow(r,c);
// 			if (nextc != -1) {
// 				if (this.mydata[r][c] == 0) {
// 					this.mydata[r][c] = this.mydata[r][nextc] ;
// 					this.mydata[r][nextc] = 0;
// 					c++;
// 				}
// 				else if (this.mydata[r][c] == this.mydata[r][nextc]) {
// 					this.mydata[r][c] *=2;
// 					this.mydata[r][nextc] =0;
// 					this.score += this.mydata[r][c];
// 				}
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 	},

// 	RightgetNEXTinRow:function(r,c){
// 		for(var i = c-1;i >= 0;i--){
// 			if (this.mydata[r][i] != 0) {
// 				return i;
// 			}
// 		}
// 		return -1;
// 	},


// 	// Двигаться вверх
// 	moveTop:function(){
// 		var before = String(this.mydata);
// 		for(var r = 0;r < 4;r++){
// 			this.moveTopInRow(r);
// 		}
// 		var after = String(this.mydata);
// 		if (before != after) {
// 			this.randomNum();
// 			if (this.isgameover()) {
// 				this.status = this.gameover;
// 			}
// 			this.dataView();
// 		}
// 	},

// 	moveTopInRow:function(r){
// 		for(var c = 0;c < 3;c++){	
// 			var nextc = this.TopgetNEXTinRow(r,c);
// 			if (nextc != -1) {
// 				if (this.mydata[c][r] == 0) {
// 					this.mydata[c][r] = this.mydata[nextc][r] ;
// 					this.mydata[nextc][r] = 0;
// 					c++;
// 				}
// 				else if (this.mydata[c][r] == this.mydata[nextc][r]) {
// 					this.mydata[c][r] *=2;
// 					this.mydata[nextc][r] =0;
// 					this.score += this.mydata[c][r];
// 				}
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 	},

// 	TopgetNEXTinRow:function(r,c){
// 		for(var i = c+1;i < 4;i++){
// 			if (this.mydata[i][r] != 0) {
// 				return i;
// 			}
// 		}
// 		return -1;
// 	},


// 	// двигаться вниз
// 	moveBottom:function(){
// 		var before = String(this.mydata);
// 		for(var r = 0;r < 4;r++){
// 			this.moveBottomInRow(r);
// 		}
// 		var after = String(this.mydata);
// 		if (before != after) {
// 			this.randomNum();
// 			if (this.isgameover()) {
// 				this.status = this.gameover;
// 			}
// 			this.dataView();
// 		}
// 	},

// 	moveBottomInRow:function(r){
// 		for(var c = 3;c > 0;c--){	
// 			var nextc = this.BottomgetNEXTinRow(r,c);
// 			if (nextc != -1) {
// 				if (this.mydata[c][r] == 0) {
// 					this.mydata[c][r] = this.mydata[nextc][r] ;
// 					this.mydata[nextc][r] = 0;
// 					c++;
// 				}
// 				else if (this.mydata[c][r] == this.mydata[nextc][r]) {
// 					this.mydata[c][r] *=2;
// 					this.mydata[nextc][r] =0;
// 					this.score += this.mydata[c][r];
// 				}
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 	},

// 	BottomgetNEXTinRow:function(r,c){
// 		for(var i = c-1;i >= 0;i--){
// 			if (this.mydata[i][r] != 0) {
// 				return i;
// 			}
// 		}
// 		return -1;
// 	},

// }








//                                                                  ПРИГОДИТСЯ
/* game.start();
document.onkeydown = function(event){
	var event = event || e || arguments[0];
	if (event.keyCode == 37) {
		game.moveLeft();
	}
	else if (event.keyCode == 38) {
		game.moveTop();
	}
	else if (event.keyCode == 39) {
		game.moveRight();	
	}
	else if (event.keyCode == 40) {
		game.moveBottom();
	}
} */




























/* // Следующий код предназначен для обработки совместимости этой игры путем ее упаковки в режим приложения,
var startX,startY,endX,endY;    // Определение четырех переменных для хранения значений по оси X и оси Y при касании и при выходе из касания
document.addEventListener("touchstart",function(event){  // Связывание события слушателя при начале касания пальцем
	var event = event || e || arguments[0];
	startX = event.touches[0].pageX;
	startY = event.touches[0].pageY;	
})

document.addEventListener("touchend",function(event){    // Привязка события прослушивания, когда палец касается и уходит
	var event = event || e || arguments[0];
	endX = event.changedTouches[0].pageX;
	endY = event.changedTouches[0].pageY;
	
	var x = endX - startX;
	var y = endY - startY;

	var absX = Math.abs(x) > Math.abs(y);
	var absY = Math.abs(y) > Math.abs(x);
	if (x > 0 && absX) {
		game.moveRight();
	}
	else if (x < 0 && absX) {
		game.moveLeft();
	}
	else if (y > 0 && absY) {
		game.moveBottom();
	}
	else if (y < 0 && absY) {
		game.moveTop();
	}

}) */

