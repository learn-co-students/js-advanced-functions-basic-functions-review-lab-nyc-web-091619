// Your code here
function saturdayFun(params='roller-skate') {
	return `This Saturday, I want to ${params}!`
}

function mondayWork(params='go to the office') {
	return `This Monday, I will ${params}.`
}

function wrapAdjective (flair = '*') {
  return function (word = 'special') {
    return `You are ${flair}${word}${flair}!`
  }
}

const Calculator = {}

Calculator.add = function (a, b) { return a + b }
Calculator.subtract = function (a, b) { return a - b }
Calculator.multiply = function (a, b) { return a * b }
Calculator.divide = function (a, b) { return a / b }

function actionApplyer (startingInt, functionArray) {
	let num = startingInt

	for (let i = 0; i < functionArray.length; i++) {
		num = functionArray[i](num)
	}
	return num
}