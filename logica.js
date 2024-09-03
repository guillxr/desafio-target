function a () {
    let arr = []
    let num = 1

    arr.push(num)

    for (i = 0; i < 4; i++) {
        arr.push(num += 2)
    }
    return arr
}

function b () {
    let arr = []
    let num = 2
    
    arr.push(num)

    for (i = 0; i < 6; i++) {
        arr.push(num *= 2)
    }
    return arr
}

function c () {
    let arr = []

    for (i = 0; i < 8; i++) {
        arr.push(
            i ** 2
        )
    }
    return arr
}

function d () {
    let arr = []
    let num = 4

    arr.push(num)

    for (i = 0; i < 4; i++) {
        arr.push(
            num ** 2
        )
        num = num + 2
    }
    return arr
}

function e () {
    let arr = []
    let a = 0
    let b = 1

    arr.push(a, b)

    for (i = 0; i < 6; i++) {
        let temp = a
        a = b
        b = temp + b
        
        arr.push(b)
    }
    return arr
}

console.log(`a) ${a()}`) // 1,3,5,7,9
console.log(`b) ${b()}`) // 2,4,8,16,32,64,128
console.log(`c) ${c()}`) // 0,1,4,9,16,25,36,49
console.log(`d) ${d()}`) // 4,16,36,64,100
console.log(`e) ${e()}`) // 0,1,1,2,3,5,8,13
// f) 2, 10, 12, 16, 17, 18, 19, 20