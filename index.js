'use strict'

let statuss = 1;
let gameover = false;
let score = 0;
let rows = 4, columns = 4;
let mass = [];
let bestScore;

const divBestScore = document.getElementById("bestScore")

const checkBestScore = () => {
	if (localStorage.getItem("best-score") === null) {
		localStorage.setItem("best-score", score);
		divBestScore.innerHTML = score;
		bestScore = 0;
	} else {
		bestScore = parseInt(localStorage.getItem("best-score"));
		divBestScore.innerHTML = bestScore;
	}
}
checkBestScore()

const newGameBoard = () => {
	gameover = false
	for (let i = 0; i < columns; i++){
		mass[i] = []
		for (let j = 0; j < rows; j++) {
		mass[i][j] = 0
		}
	}

	randomNum()
	randomNum()

	score = 0
	dataView()
}
newGameBoard()

function randomNum() {
	let flag = true;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (mass[c][r] === 0) {
				flag = false
			}
		}
	}

	while (!flag) {
		let r = Math.floor(Math.random()*4)
		let c = Math.floor(Math.random()*4)

		if(mass[c][r] === 0) {
			let num = Math.random() > 0.75 ? 4 : 2
			mass[c][r] = num
			flag = true
			return !flag
		}
	}
	dataView()
}

function dataView() {
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

const deleteZero = (row) => {
	return row.filter(elem => !!elem)
}

const isArraysMatch = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

const move = (row) => {
	row = deleteZero(row)
	let hadMergedCube = false

	for (let i = 0; i < row.length; i++) {
		if (row[i] === row[i + 1]) {
			row[i] = row[i] * 2
			row[i + 1] = 0
			score = score + row[i]
			hadMergedCube = true
			document.getElementById('score01').innerHTML = score;
		}
	}

	row = deleteZero(row)
	while (row.length < rows) {
		row.push(0)
	}

	if (score > bestScore) {
		localStorage.setItem("best-score", score)
		document.getElementById("bestScore").innerHTML = score
		divBestScore.innerHTML = score
	}
	return [row, hadMergedCube]
}

const moveLeft = () => {
	let wasStep = false

	for (let r = 0; r < rows; r++) {
		let row = mass[r]
		let changedRow = move(row)		
		let hasModification = !isArraysMatch(row, changedRow[0])

		if (changedRow[1] || hasModification) {
			wasStep = true
		}
		
		row = changedRow[0]
		mass[r] = row

	}
	return wasStep
}

const moveRight = () => {
	let wasStep = false

	for (let r = 0; r < rows; r++) {
		let row = mass[r].reverse()
		let changedRow = move(row)
		let hasModification = !isArraysMatch(row, changedRow[0])
		row = changedRow[0]
		mass[r] = row.reverse()

		if (hasModification || changedRow[1]) {
			wasStep = true
		}
	}
	return wasStep
}

const moveUp = () => {
	let wasStep = false

	for (let c = 0; c < columns; c++) {
		let row = [mass[0][c], mass[1][c], mass[2][c], mass[3][c]]
		let changedRow = move(row)
		let hasModification = !isArraysMatch(row, changedRow[0])
		row = changedRow[0]

		if (changedRow[1] || hasModification) {
			wasStep = true
		}
		
		for (let r = 0; r < rows; r++) {
			mass[r][c] = row[r]
		}
	}
	return wasStep
}

const moveDown = () => {
	let wasStep = false

	for (let c = 0; c < columns; c++) {
		let row = [mass[0][c], mass[1][c], mass[2][c], mass[3][c]].reverse()
		let changedRow = move(row)
		let hasModification = !isArraysMatch(row, changedRow[0])
		row = changedRow[0].reverse()

		if (changedRow[1] || hasModification) {
			wasStep = true
		}
		
		for (let r = 0; r < rows; r++) {
			mass[r][c] = row[r]
		}
	}
	return wasStep
}

const checkForGameOver = () => {
	let number = 0;
	let num = false
	let endMassROW = []
	let endMassCOLUMN = []

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (mass[r][c] === 0) {
				number++;
			}
		}
	}
	console.log(number);
	if (number === 0) {
		for (let c = 0; c < columns - 1; c++) {
			for (let r = 0; r < rows; r++) {
				if (mass[r][c] === mass[r][c+1]) {
					endMassROW.push(num)
				}
			}
		}

		for (let c = 0; c < columns; c++) {
			for (let r = 0; r < rows - 1; r++) {
				if (mass[r][c] === mass[r+1][c]) {
					endMassCOLUMN.push(num)
				}
			}
		}
		console.log(endMassCOLUMN);
		console.log(endMassROW);
		if (endMassCOLUMN.length === 0 && endMassROW.length === 0) {
			gameover = true
		}
	}
}

document.addEventListener('keydown', listenKey)

 function listenKey (event) {

	let hasModification = false

	if (event.keyCode == 37) {
		hasModification = moveLeft()
	}
	if (event.keyCode == 38) {
		hasModification = moveUp()

	}	
	if (event.keyCode == 39) {
		hasModification = moveRight()

	}
	if (event.keyCode == 40) {
		hasModification = moveDown()
	}

	if (hasModification) {
		randomNum()
		dataView()
	}

	checkForGameOver()

	if (gameover) {
		document.removeEventListener('keydown', listenKey)
		setTimeout(() => {
			alert(`Your score ${score}`)
			newGameBoard()
		}, 500)
	}
}
