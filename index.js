// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
}

let Calculator = {
    add : function(x, y) { return x + y },
    subtract : function(x, y) { return x - y },
    multiply : function(x, y) { return x * y },
    divide : function(x, y) { return x / y }
}

function actionApplyer(n, array) {
    if (array.length === 0) {
        return n
    } else {
        const [f1, f2, f3] = array
        let n = f1(n)
        n = f2(n)
        n = f3(n)
        return n
    }
}