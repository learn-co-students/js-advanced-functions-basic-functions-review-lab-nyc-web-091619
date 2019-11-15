function saturdayFun(arg = 'roller-skate') {
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = function(arg = 'go to the office') {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(n='*') {
    return function(adj="whatever"){
        return `You are ${n}${adj}${n}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(n, arr) {
    let i = n
    for (let j=0; j<arr.length; j++) {
        i =arr[j](i)
    }
    return i;
}