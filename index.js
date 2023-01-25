'use strict'

// let score = document.getElementById("score01")
let statuss = 1
let gameover = 0
let score = 0
let rows = 4, columns = 4;
let mass = [];
let bestScore;

const divBestScore = document.getElementById("bestScore")
const checkBestScore = () => {
  if (localStorage.getItem("best-score") === null) {
    localStorage.setItem("best-score", score); // initial score = 0
    divBestScore.innerHTML = score;
    bestScore = 0;
  } else {
    bestScore = parseInt(localStorage.getItem("best-score"));
    divBestScore.innerHTML = bestScore;
  }
};
checkBestScore()

const newGameBoard = () => {
  for (let i = 0; i < columns; i++){
  	mass[i] = [];
  	for (let j = 0; j < rows; j++) {
	  mass[i][j] = 0;
  	}
  }

  // randomNum()
  // randomNum()
	mass[0][0] = 2
	mass[0][1] = 2
	mass[0][2] = 2
	mass[0][3] = 2
	mass[1][0] = 8
	mass[1][1] = 4
	mass[1][2] = 4
	mass[1][3] = 8
	mass[2][0] = 0
	mass[2][1] = 8
	mass[2][2] = 0
	mass[2][3] = 4
	mass[3][0] = 2
	mass[3][1] = 4
  dataView()
}
newGameBoard()

function randomNum() {       // Метод генерации случайных чисел и присвоения начального случайного числа
	let flag = true;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (mass[r][c] === 0) {
        flag = false;
      }
    }
  }

  while (!flag) {
		for(;;)	{                     // Циклу for здесь нельзя задать фиксированное условие, потому что конечное условие не может быть известно, когда игра запущена, и он может работать только последовательно
			let r = Math.floor(Math.random()*4);      // Задаем случайную величину и пусть это будет координата, в которой число появляется случайным образом
			let c = Math.floor(Math.random()*4);
			if(mass[c][r] === 0) {               // Если значение в текущей координате в данных равно 0 или пусто, вставляем случайное число 2 или 4
				let num = Math.random() > 0.75 ? 4 : 2;     // Установленное случайное число 2 или 4 имеет одинаковый шанс выпадения, наполовину открыто
				mass[c][r] = num;
				flag = true
				break;
			}
		}

	}
}

function dataView() {      // Метод передачи данных на страницу и контроль смены стиля
	for(let r = 0; r < 4; r++){
  	for(let c = 0; c < 4; c++){
      let div = document.getElementById("c" + c + r);
      if (mass[c][r] === 0) {
        div.innerHTML = "";
        div.className = "cell";
      }
      else {
        div.innerHTML = mass[c][r];
        div.className = 'cell n'+ mass[c][r];
      }
    }
  }
  document.getElementById('score01').innerHTML = score;
  if (statuss === gameover) {
    document.getElementById('score02').innerHTML = score;
    document.getElementById('gameover').style.display = 'block';
  }
  else{
    document.getElementById('gameover').style.display = 'none';
  }
}

// let massive = []
// for (let i = 0; i < y; i++){
//   massive[i] = 0;
// }
// massive[0] = 1
// console.log(massive);

// let massiveX = []
// for (let i = 0; i < y; i++){
//   massiveX[i] = 0;
// }
// massiveX[0] = 0
// console.log(massiveX);





//если разницы между массивами после движения нет, то действие не происходит, иначе рандом 
// function arrayDiff(a, b) {
// 	console.log([
// 		 ...a.filter(x => !b.includes(x)),
// 		 ...b.filter(x => !a.includes(x))
// 	]);
// }
// arrayDiff(massive, massiveX)

// console.log(typeof(arrayDiff(massive, massiveX)));



// console.log(`изначальный массив ${mass}`);

// for (let i = 0; i < mass.length; i++) {
// if (typeof(mass[i+1]) == "undefined") {



const isArraysMatch = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
};





// randomNum()
// randomNum()
// dataView()




// let checkLeft = true
// let checkRight = true


const deleteZero = (row) => {
	return row.filter(elem => elem !== 0)
}



// dataView()

const move = (row) => {
		row = deleteZero(row)
		// console.log(row)

		let hadMergedCube = false

		for (let i = 0; i < row.length; i++) {
			if (row[i] === row[i + 1]) {
				row[i] = row[i] * 2
				row[i + 1] = 0
				score = score + row[i]
				hadMergedCube = true
				document.getElementById('score01').innerHTML = score;
				dataView()
			}
		}
		// console.log(mass[c])

		row = deleteZero(row)
		while (row.length < rows) {
			row.push(0)
		}

		if (score > bestScore) {
			localStorage.setItem("best-score", score)
			document.getElementById("bestScore").innerHTML = score
			divBestScore.innerHTML = score
		}

			// console.log([row, hadMergedCube])
			return [row, hadMergedCube]
	}


const moveLeft = () => {
	let wasStep = false

	for (let r = 0; r < rows; r++) {
			let row = mass[r]
		// console.log(row)
		// console.log(move(row))
			let changedRow = move(row)
		// console.log(changedRow)
		// console.log(row)

		let hasModification = !isArraysMatch(row, changedRow[0])
		// console.log(hasModification)
		row = changedRow[0]
		mass[r] = row

		// || hasModification
		if (changedRow[1] || hasModification) {
			wasStep = true
		}

		for (let c = 0; c < columns; c++) {
			dataView()
		}
	}
	return wasStep
}

		// 	// console.log(mass.length);
		// 	if (row[i] !== row[i+1] && (row[i] !== 0)) {
		// 		i++
		// 		if (row[i] !== row[i+1] && (row[i] !== 0)) {
		// 			i++
		// 		}
		// 	}
		// 	if ((row[i+1] !== undefined) && (row[i] === row[i+1])) {
		// 		score += row[i] + row[i+1]
		// 		row[i] = row[i] * 2
		// 		row[i + 1] = 0
		// 		i++
		// 		checkLeft = true
		// 		// console.log(checkLeft);
		// 	}
		// 	else if ((row[i+1] !== undefined) && (row[i] !== row[i+1])) {
		// 		break
		// 	}
		// }
		// return (row);
			// console.log("helo");
	// }
			// console.log(row);

		// row = sumLeftElemnts(row)
	// }

// }
// moveLeft(mass)


// const moveLeft = () => {
// 	for (let j = 0; j < mass.length; j++) {
//
// 		const checkForJustMove = () => {
// 			for (let i = 0; i < mass.length; i++) {
// 				for (let i = 4; i > 0; i--) {
// 					if (mass[j][i] == 0) {
// 						checkRight = true
// 					}
// 				}
// 			}
// 		}
// 		checkForJustMove()
// 		// console.log(mass[j], j);
//
// 		// const deleteMass = (qwe) => {
// 		// 	// console.log(qwe)
// 		// 	const resultmass = qwe.filter(elem => elem !== 0)
// 		// 	// console.log(resultmass + "  resultmass")
// 		// 	return resultmass
// 		// }
//
// 		let resultmass = deleteMass(mass[j])
// 		// console.log(resultmass);
//
// 		const sumLeftElemnts = (resultmass) => {
// 			for (let i = 0; i < resultmass.length; i++) {
// 				// console.log(mass.length);
// 				if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
// 					i++
// 					if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
// 						i++
// 					}
// 				}
// 				if ((resultmass[i+1] != undefined) && (resultmass[i] == resultmass[i+1])) {
// 					score += resultmass[i] + resultmass[i+1]
// 					resultmass[i] = resultmass[i] * 2
// 					resultmass[i + 1] = 0
// 					i++
// 					checkLeft = true
// 					// console.log(checkLeft);
// 				}
// 				else if ((resultmass[i+1] != undefined) && (resultmass[i] !== resultmass[i+1])) {
// 					break
// 				}
// 			}
// 			return (resultmass);
// 				// console.log("helo");
// 		}
// 			// console.log(resultmass);
//
//
// 		resultmass = sumLeftElemnts(resultmass)
// 		// console.log(resultmass, mass[j])
// 		resultmass = deleteMass(resultmass)
// 		// console.log(resultmass, mass[j])
//
// 		// Далее сдвигаю все элементы влево и добавляю 0
// 		const shiftLeft = (resultmass) => {
// 			if (resultmass.length == 0) {
// 				resultmass.push(0,0,0,0)
// 			}
// 			else if (resultmass.length > 0 && resultmass.length <= 1) {
// 				resultmass.push(0,0,0)
// 			}
// 			else if (resultmass.length > 1 && resultmass.length <= 2) {
// 				resultmass.push(0,0)
// 			}
// 			else if (resultmass.length > 2 && resultmass.length <= 3) {
// 				resultmass.push(0)
// 			}
// 			else  if (resultmass.length > 3 && resultmass.length <= 4) {
// 				resultmass
// 			}
// 			return resultmass
// 		}
//
// 		// Далее переписываю изменяемый массив
// 		resultmass = shiftLeft(resultmass)
//
// 		mass[j] = shiftLeft(resultmass)
// 		// console.log(mass[j]);
// 		// console.log(mass);
// 		// console.log(checkLeft);
// 		// console.log(score);
// 		// console.log(moveLeft());
// 		dataView()
// 	}
// 	// console.log(mass);
// 	// if (1) {}
// 	// console.log(noMoveArr);
// 	// let firstStart = true
// 	// if ()
//
// 		if (checkLeft) {
// 			randomNum()
// 			dataView()
// 			console.log(mass);
// 			checkLeft = false
// 			// console.log(noMoveArr);
// 		}
// 		// console.log(checkLeft);
//
// 		for (let j = 0; j < mass.length; j++) {
// 			// console.log(mass[j]);
// 			for (let i = 3; i >= 0; i--) {
// 				if ( checkLeft === false )	{
// 				// console.log(mass[j][i]);
// 				// i++
// 				if (mass[j][i] !== 0 && mass[j][i-1] == 0 && mass[j][i-1] !== undefined) {
// 					console.log(mass[j][i]);
// 					checkLeft = true
// 				}
// 			}
// 		}
// 	}
// 	console.log(checkLeft);
// 	checkLeft = false
// 	console.log(checkRight);
// }
// 			// gameover = 1
// 	// noMoveArr2==noMoveArr ?
// 	// if (mass === moveLeft()) {
// 		// 	console.log(mass);
// 		// 	console.log(moveLeft());
// 		// }
// 		// let resultmass = mass
// 		// console.log(checkLeft);
// 		// if (checkLeft) {
// 		// 	randomNum()
// 		// 	checkLeft = false
// 		// }
// 	// console.log(mass);
// const moveRight = () => {
//
// 	for (let j = 0; j < mass.length; j++) {
//
// 		const checkForJustMove = () => {
// 			for (let i = 0; i < mass.length; i++) {
// 				for (let i = 0; i < 4; i++) {
// 					if (mass[j][i] == 0 &&( mass[j][i-1] !== 0 || mass[j][i-2] !== 0  || mass[j][i-3] !== 0) && mass[j][i-1] !== undefined) {
// 						checkLeft = true
// 					}
// 				}
// 			}
// 		}
// 		checkForJustMove()
//
// 		// let resultmass = deleteMass(mass)
// 		let resultmass = deleteMass(mass[j])
// 		// console.log(resultmass + " массив после удаления нулей")
//
//
// 		const sumRightElemnts = (resultmass) => {
// 			for (let i = 3; i >= 0; i--) {
// 				// console.log(mass.length);
// 				if (resultmass[i] !== resultmass[i-1] && (resultmass[i] !== 0)) {
// 					i--
// 					if (resultmass[i] !== resultmass[i-1] && (resultmass[i] !== 0)) {
// 						i--
// 					}
// 				}
// 				if ((resultmass[i-1] != undefined) && (resultmass[i] == resultmass[i-1])) {
// 					score += resultmass[i] + resultmass[i-1]
// 					// console.log(i);
// 					resultmass[i] = resultmass[i] * 2
// 					resultmass[i-1] = 0
// 					i--
// 					checkRight = true
// 					console.log(resultmass);
// 				}
// 				else if ((resultmass[i-1] != undefined) && (resultmass[i] !== resultmass[i-1])) {
// 					break
// 				}
// 			}
// 			return (resultmass);
// 				// console.log("helo");
// 		}
// 			// console.log(resultmass);
//
//
// 		resultmass = sumRightElemnts(resultmass)
// 		// console.log(resultmass, mass[j])
// 		resultmass = deleteMass(resultmass)
// 		// console.log(resultmass, mass[j])
//
// 		// Далее сдвигаю все элементы влево и добавляю 0
// 		const shiftRight = (resultmass) => {
// 			if (resultmass.length == 0) {
// 				resultmass.unshift(0,0,0,0)
// 			}
// 			else if (resultmass.length > 0 && resultmass.length <= 1) {
// 				resultmass.unshift(0,0,0)
// 			}
// 			else if (resultmass.length > 1 && resultmass.length <= 2) {
// 				resultmass.unshift(0,0)
// 			}
// 			else if (resultmass.length > 2 && resultmass.length <= 3) {
// 				resultmass.unshift(0)
// 			}
// 			else  if (resultmass.length > 3 && resultmass.length <= 4) {
// 				resultmass
// 			}
// 			return resultmass
// 		}
//
// 		// Далее переписываю изменяемый массив
// 		resultmass = shiftRight(resultmass)
// 		mass[j] = shiftRight(resultmass)
// 		checkForJustMove()
// 		dataView()
// 	}
// 	// console.log(mass);
// 	// if (1) {}
// 	// console.log(noMoveArr);
//
// 	if (checkRight) {
// 		randomNum()
// 		dataView()
// 		// console.log(mass);
// 		checkRight = false
// 		// console.log(noMoveArr);
// 	}
// 		// console.log(checkLeft);
//
// 	// if ( checkRight === false )	{
// 	for (let j = 0; j < mass.length; j++) {
// 		// console.log(mass[j]);
// 		for (let i = 0; i < mass[j].length; i++) {
// 			if (checkRight === false) {
// 			// console.log(mass[j].length);
// 			//console.log(mass[j][i]);
// 			// i++
// 			if (mass[j][i] !== 0 && mass[j][i+1] == 0 && mass[j][i+1] !== undefined) {
// 				// console.log(mass[j][i]);
// 				checkRight = true
// 			}
// 			}
// 		}
// 	}
// 	console.log(checkLeft);
// 	// chec
// 	console.log(checkRight);
// }
// }
		// gameover = 1
// noMoveArr2==noMoveArr ? 
	// if (mass === moveLeft()) {
		// 	console.log(mass);
		// 	console.log(moveLeft());
		// }
		// let resultmass = mass
		// console.log(checkLeft);
		// if (checkLeft) {
		// 	randomNum()
		// 	checkLeft = false
		// }
// let moveRight = () => {
// 	// mass.reverse
// 	// console.log(mass.reverse());
// 	let deleteMass = (qwe) => {
// 		return qwe.filter(elem => elem != 0)
// 	}
// 	deleteMass(mass)
// 	let resultmass = deleteMass(mass)
// 	// console.log(resultmass)
// 	console.log(resultmass + " массив после удаления нулей")
// 	// resultmass = deleteMass(mass)
// 	// console.log(`массив без 0 через функцию ${deleteMass(mass)}`);
// 	//суммирую нужные элементы
// 	let sumRightElements = (resultmass) => {
// 		for (let i = resultmass.length; i >= 0; i--) {
// 			if (resultmass[i-1] != undefined) {
// 				if (resultmass[i] == resultmass[i-1]) {
// 					score += resultmass[i] + resultmass[i-1]
// 					resultmass[i] = resultmass[i] * 2
// 					resultmass[i - 1] = 0
// 					i--
// 				}
// 			}
// 		}
// 		return(resultmass)
// 			// console.log(resultmass);
// 	}
// 	resultmass = sumRightElements(resultmass)
// 	console.log(resultmass)
// 	resultmass = deleteMass(resultmass)
// 	console.log(resultmass)
// 	let sdvigRight = (resultmass) => {
// 	if (resultmass.length == 0) {
// 		resultmass.unshift(0,0,0,0)
// 	}
// 	else if (resultmass.length > 0 && resultmass.length <= 1) {
// 		resultmass.unshift(0,0,0)
// 	}
// 	else if (resultmass.length > 1 && resultmass.length <= 2) {
// 		resultmass.unshift(0,0)
// 	}
// 	else if (resultmass.length > 2 && resultmass.length <= 3) {
// 		resultmass.unshift(0)
// 	}
// 	else  if (resultmass.length > 3 && resultmass.length <= 4) {
// 		resultmass
// 	}
// 	return resultmass
// }
// resultmass = sdvigRight(resultmass)
// // return sdvigLeft(resultmass)
// let perem = sdvigRight(resultmass)
// 	console.log(perem)
// // return mass
// // perem[3] = 1
// mass = perem
// return(mass)
// 	// sumRightElements(resultmass)
// 	// 	console.log(resultmass);
// 	// 	return (resultmass);
// 	// console.log(sumRightElements(resultmass))
// }


document.onkeydown = function(event){
	let hasModification = false

	if (event.keyCode == 37) {
		hasModification = moveLeft()
		if (hasModification === true) {
			// moveLeft()
			randomNum()
		}
		else {}
		// moveLeft()
		// hasModification = false
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
	// console.log(hasModification)
hasModification = false

}









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

