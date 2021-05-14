const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter your password - ", function(pass) {
    var hasNum = /\d/g
    var hasLetter = /[a-zA-Z]/g
    var hasSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g
    
    if (pass.length < 10) {
        console.log("failed: password must be at least 10 characters long")
    } else if (hasNum.test(pass) === false) {
        console.log("failed: password must contain at least one number")
    } else if (hasLetter.test(pass) === false) {
        console.log("failed: password must contain at least one letter")
    } else if (hasSpecial.test(pass) === false) {
        console.log("failed: must contain at least one special character")
    } else {
        console.log("success!")
    }
reader.close()
});





