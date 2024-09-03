let numberCheck = 13

function fibonacciChecker(num) {
    if (num < 0) return false

    let a = 0
    let b = 1

    for (i = 0; a < num; i++) {
        let temp = a
        a = b
        b = temp + b
        console.log(a)
    }

    return a === num
}

if (fibonacciChecker(numberCheck)) {
    console.log(`${numberCheck} pertence a sequencia de Fibonacci.`)
} else {
    console.log(`${numberCheck} não pertence a sequencia de Fibonacci.`)
}
