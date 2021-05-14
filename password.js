const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter your password - ", function(pass) {
    console.log(`You entered - ${pass}`)
})