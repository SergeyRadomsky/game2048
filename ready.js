// 'use strict'

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


// для однострочного массива, движение вправо
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






