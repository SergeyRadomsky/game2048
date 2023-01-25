// 'use strict'

// let bestScore;
//
// const divBestScore = document.getElementById("bestScore")
// // console.log(divBestScore)
//
// const checkBestScore = () => {
//   if (localStorage.getItem("best-score") === null) {
//     localStorage.setItem("best-score", score); // initial score = 0
//     divBestScore.innerHTML = score;
//     bestScore = 0;
//   } else {
//     bestScore = parseInt(localStorage.getItem("best-score"));
//     divBestScore.innerHTML = bestScore;
//   }
// }
//
// 		if (score > bestScore) {
// 			localStorage.setItem("best-score", score)
// 			document.getElementById("bestScore").innerHTML = score
// 			divBestScore.innerHTML = score
// 			dataView()
// 		}









// // let score = document.getElementById("score01")
// let status = 1
// let gameover = 0
// let score = 0
// let x = 4, y = 4;
// let massive = [];

// for (let i = 0; i < y; i++){
//   massive[i] = [];
//   for (let j = 0; j < x; j++){
//     massive[i][j] = 0;
//   }
// }



// massive[1][2] = 2
// massive[1][3] = 2

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

// function dataView() {      // Метод передачи данных на страницу и контроль смены стиля
//   for(let y = 0; y < 4; y++){
//     for(let x = 0; x < 4; x++){
//       let div = document.getElementById("c" + y + x);
//       if (massive[y][x] == 0) {
//         div.innerHTML = "";
//         div.className = "cell";
//       }
//       else {
//         div.innerHTML = massive[y][x];
//         div.className = 'cell n'+ massive[y][x];
//       }
//     }
//   }
// }

// let mass = []
// for (let i = 0; i < y; i++){
//   mass[i] = 0;
// }

// mass[0] = 2
// mass[1] = 2
// mass[2] = 2
// mass[3] = 2

// console.log(mass);


// // убираю все 0, и сдвигаю все элементы вправо
// // и возвращаю 0 чтобы длина массива была 4
// function sdvigRight() {
// 	let resultmass = mass.filter(elem => elem != 0) 
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
// let resultSdvigRight = sdvigRight()
// console.log(sdvigRight())

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

massive[1][2] = 2
massive[2][2] = 4

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

mass[0] = 0
mass[1] = 2
mass[2] = 2
mass[3] = 2

console.log(`изначальный массив ${mass}`);

// for (let i = 0; i < mass.length; i++) {
// if (typeof(mass[i+1]) == "undefined") {


// для однострочного массива, движение влево
let moveLeft = () => {	// убираю все 0 из массива 
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



// для движения влево (закончено)
let checkLeft = false

const moveLeft = () => {
	// const noMoveArr = [].concat(mass)
	// console.log(noMoveArr);
	// console.log(noMoveArr);
// убираю все 0 из массива 

	for (let j = 0; j < mass.length; j++) {
		// console.log(mass[j], j);
		
		const deleteMass = (qwe) => {
			// console.log(qwe)
			const resultmass = qwe.filter(elem => elem !== 0)
			// console.log(resultmass + "  resultmass")
			return resultmass
		}

		let resultmass = deleteMass(mass[j])
		// console.log(resultmass);

		const sumLeftElemnts = (resultmass) => {
			for (let i = 0; i < resultmass.length; i++) {
				if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
					i++
					if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
						i++
					}
				}
				if ((resultmass[i+1] != undefined) && (resultmass[i] == resultmass[i+1])) {
					score += resultmass[i] + resultmass[i+1]
					resultmass[i] = resultmass[i] * 2
					resultmass[i + 1] = 0
					i++
					checkLeft = true
					// console.log(checkLeft);
				}
				else if ((resultmass[i+1] != undefined) && (resultmass[i] !== resultmass[i+1])) {
					break
				}
			}
			return (resultmass);
				// console.log("helo");
		}
			// console.log(resultmass);


		resultmass = sumLeftElemnts(resultmass)
		// console.log(resultmass, mass[j])
		resultmass = deleteMass(resultmass)
		// console.log(resultmass, mass[j])

		// Далее сдвигаю все элементы влево и добавляю 0
		const shiftLeft = (resultmass) => {
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

		// Далее переписываю изменяемый массив
		resultmass = shiftLeft(resultmass)
		
		mass[j] = shiftLeft(resultmass)
		// console.log(mass[j]);
		console.log(mass);
		console.log(checkLeft);
		// console.log(score);
		// console.log(moveLeft());
		dataView()
	}	
	// console.log(mass);
	// if (1) {}
	// console.log(noMoveArr);

		if (checkLeft) {
			randomNum()
			dataView()
			console.log(mass);
			checkLeft = false
			// console.log(noMoveArr);
		}
		// console.log(checkLeft);

		if ( checkLeft === false )	{
			for (let j = 0; j < mass.length; j++) {
				// console.log(mass[j]);
				for (let i = 3; i >= 0; i--) {
					// console.log(mass[j][i]);
					// i++
					if (mass[j][i] && mass[j][i-1] == 0 && mass[j][i-1] !== undefined) {
					console.log(mass[j][i]);
					checkLeft = true
				}
			}
		}
			// gameover = 1
		}
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
}

// для однострочного массива, движение вправо
let deleteZero = (array) => {
	return array.filter(elem => elem != 0)
}
let move = (row) => {
	// mass.reverse
	// console.log(mass.reverse());
	let hasStep = false

	let row = deleteZero(row)
	// console.log(resultmass)
	console.log(row + " массив после удаления нулей")

	// resultmass = deleteMass(mass)
	// console.log(`массив без 0 через функцию ${deleteMass(mass)}`);

	for (let i = 0; i < row.length; i++) {
		if (row[i] === row[i + 1]) {
			row[i] = row[i] * 2
			row[i + 1] = 0
			score = score + row[i]
		}
		document.getElementById('score01').innerHTML = score;

	}
	
	//суммирую нужные элементы
	let sumRightElements = (resultmass) => {
		for (let i = resultmass.length; i >= 0; i--) {
			if (resultmass[i-1] != undefined) {
				if (resultmass[i] == resultmass[i-1]) {
					score += resultmass[i] + resultmass[i-1]
					resultmass[i] = resultmass[i] * 2
					resultmass[i - 1] = 0
					i--
				}
			}
		}
		return(resultmass)
			// console.log(resultmass);
	}

	resultmass = sumRightElements(resultmass)
	console.log(resultmass)
	resultmass = deleteMass(resultmass)
	console.log(resultmass)



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

























//LAST////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const moveLeft = () => {
	for (let j = 0; j < mass.length; j++) {

		const checkForJustMove = () => {
			for (let i = 0; i < mass.length; i++) {
				for (let i = 4; i > 0; i--) {
					if (mass[j][i] == 0) {
						checkRight = true
					}
				}
			}
		}
		checkForJustMove()
		// console.log(mass[j], j);

		// const deleteMass = (qwe) => {
		// 	// console.log(qwe)
		// 	const resultmass = qwe.filter(elem => elem !== 0)
		// 	// console.log(resultmass + "  resultmass")
		// 	return resultmass
		// }

		let resultmass = deleteMass(mass[j])
		// console.log(resultmass);

		const sumLeftElemnts = (resultmass) => {
			for (let i = 0; i < resultmass.length; i++) {
				// console.log(mass.length);
				if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
					i++
					if (resultmass[i] !== resultmass[i+1] && (resultmass[i] !== 0)) {
						i++
					}
				}
				if ((resultmass[i+1] != undefined) && (resultmass[i] == resultmass[i+1])) {
					score += resultmass[i] + resultmass[i+1]
					resultmass[i] = resultmass[i] * 2
					resultmass[i + 1] = 0
					i++
					checkLeft = true
					// console.log(checkLeft);
				}
				else if ((resultmass[i+1] != undefined) && (resultmass[i] !== resultmass[i+1])) {
					break
				}
			}
			return (resultmass);
				// console.log("helo");
		}
			// console.log(resultmass);


		resultmass = sumLeftElemnts(resultmass)
		// console.log(resultmass, mass[j])
		resultmass = deleteMass(resultmass)
		// console.log(resultmass, mass[j])

		// Далее сдвигаю все элементы влево и добавляю 0
		const shiftLeft = (resultmass) => {
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

		// Далее переписываю изменяемый массив
		resultmass = shiftLeft(resultmass)

		mass[j] = shiftLeft(resultmass)
		// console.log(mass[j]);
		// console.log(mass);
		// console.log(checkLeft);
		// console.log(score);
		// console.log(moveLeft());
		dataView()
	}
	// console.log(mass);
	// if (1) {}
	// console.log(noMoveArr);
	// let firstStart = true
	// if ()

		if (checkLeft) {
			randomNum()
			dataView()
			console.log(mass);
			checkLeft = false
			// console.log(noMoveArr);
		}
		// console.log(checkLeft);

		for (let j = 0; j < mass.length; j++) {
			// console.log(mass[j]);
			for (let i = 3; i >= 0; i--) {
				if ( checkLeft === false )	{
				// console.log(mass[j][i]);
				// i++
				if (mass[j][i] !== 0 && mass[j][i-1] == 0 && mass[j][i-1] !== undefined) {
					console.log(mass[j][i]);
					checkLeft = true
				}
			}
		}
	}
	console.log(checkLeft);
	checkLeft = false
	console.log(checkRight);
}
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
	// console.log(mass);

// console.log(noMoveArr);

















const moveRight = () => {

	for (let j = 0; j < mass.length; j++) {

		const checkForJustMove = () => {
			for (let i = 0; i < mass.length; i++) {
				for (let i = 0; i < 4; i++) {
					if (mass[j][i] == 0 &&( mass[j][i-1] !== 0 || mass[j][i-2] !== 0  || mass[j][i-3] !== 0) && mass[j][i-1] !== undefined) {
						checkLeft = true
					}
				}
			}
		}
		checkForJustMove()

		// let resultmass = deleteMass(mass)
		let resultmass = deleteMass(mass[j])
		// console.log(resultmass + " массив после удаления нулей")


		const sumRightElemnts = (resultmass) => {
			for (let i = 3; i >= 0; i--) {
				// console.log(mass.length);
				if (resultmass[i] !== resultmass[i-1] && (resultmass[i] !== 0)) {
					i--
					if (resultmass[i] !== resultmass[i-1] && (resultmass[i] !== 0)) {
						i--
					}
				}
				if ((resultmass[i-1] != undefined) && (resultmass[i] == resultmass[i-1])) {
					score += resultmass[i] + resultmass[i-1]
					// console.log(i);
					resultmass[i] = resultmass[i] * 2
					resultmass[i-1] = 0
					i--
					checkRight = true
					console.log(resultmass);
				}
				else if ((resultmass[i-1] != undefined) && (resultmass[i] !== resultmass[i-1])) {
					break
				}
			}
			return (resultmass);
				// console.log("helo");
		}
			// console.log(resultmass);


		resultmass = sumRightElemnts(resultmass)
		// console.log(resultmass, mass[j])
		resultmass = deleteMass(resultmass)
		// console.log(resultmass, mass[j])

		// Далее сдвигаю все элементы влево и добавляю 0
		const shiftRight = (resultmass) => {
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

		// Далее переписываю изменяемый массив
		resultmass = shiftRight(resultmass)
		mass[j] = shiftRight(resultmass)
		checkForJustMove()
		dataView()
	}
	// console.log(mass);
	// if (1) {}
	// console.log(noMoveArr);

	if (checkRight) {
		randomNum()
		dataView()
		// console.log(mass);
		checkRight = false
		// console.log(noMoveArr);
	}
		// console.log(checkLeft);

	// if ( checkRight === false )	{
	for (let j = 0; j < mass.length; j++) {
		// console.log(mass[j]);
		for (let i = 0; i < mass[j].length; i++) {
			if (checkRight === false) {
			// console.log(mass[j].length);
			//console.log(mass[j][i]);
			// i++
			if (mass[j][i] !== 0 && mass[j][i+1] == 0 && mass[j][i+1] !== undefined) {
				// console.log(mass[j][i]);
				checkRight = true
			}
			}
		}
	}
	console.log(checkLeft);
	// chec
	console.log(checkRight);
}


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
//LAST////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











// // убираю все 0 из массива 
// let deleteMass = () => {
// 	return mass.filter(elem => elem != 0)
// }
// console.log(`массив без 0 через функцию ${deleteMass()}`);
// let resultmass = deleteMass()


// //суммирую нужные элементы
// function sumLeftElemnts() {
// 	for (let i = 0; i < resultmass.length; i++) {
		
// 		if (resultmass[i+1] != undefined) {
// 			// console.log("E");
// 			if (resultmass[i] == resultmass[i+1]) {
// 					resultmass[i] = resultmass[i] * 2
// 					resultmass[i + 1] = 0
// 					i++
// 			}
// 		}
// 		// console.log("helo");
// 	}
// 	// console.log(resultmass);
// 	return (resultmass);
// }
// sumLeftElemnts()


// // Далее сдвигаю все элементы вправо
// function sdvigLeft() {
// 	if (resultmass.length == 0) {
// 		resultmass.push(0,0,0,0)
// 	}
// 	else if (resultmass.length > 0 && resultmass.length <= 1) {
// 		resultmass.push(0,0,0)
// 	}
// 	else if (resultmass.length > 1 && resultmass.length <= 2) {
// 		resultmass.push(0,0)
// 	}
// 	else if (resultmass.length > 2 && resultmass.length <= 3) {
// 		resultmass.push(0)
// 	}
// 	else  if (resultmass.length > 3 && resultmass.length <= 4) {
// 		resultmass
// 	}
// 	return resultmass
// }

// let perem = resultmass
// // perem[3] = 1

// console.log(perem)

// sdvigLeft()

// let resultSdvigLeft = sdvigLeft()
// // resultSdvigLeft.sdvigLeft
// console.log(resultSdvigLeft);
// // console.log(sdvigLeft())






