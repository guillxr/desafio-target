let text = "leite"
let letter = "a"
let repeat = 0

for (let i = 0; i < text.length; i++) {
    if (letter.toLowerCase() === text[i].toLowerCase()) {
        repeat++
    }
}

if (repeat > 0) {
    console.log(`a palavra ${text} possui a letra "${letter}", que se repete ${repeat} vezes.`)
} else {
    console.log(`a palavra ${text} não possui a letra "${letter}".`)
}
