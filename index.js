const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","!","@","#","$","%","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?"];

let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')

passwordOne.style.width = "211pz"
passwordOne.style.height = "39px"
passwordOne.style.fontStyle = "normal"
passwordOne.style.fontWeight = "500"
passwordOne.style.fontSize = "16px"
passwordOne.style.lineHeight = "32px"
passwordOne.style.textAlign = "center"
passwordOne.style.color = "#55F991"

passwordTwo.style.width = "211px"
passwordTwo.style.height = "39px"
passwordTwo.style.fontStyle = "normal"
passwordTwo.style.fontWeight = "500"
passwordTwo.style.fontSize = "16px"
passwordTwo.style.lineHeight = "32px"
passwordTwo.style.textAlign = "center"
passwordTwo.style.color = "#55F991"

let passwordLenght = 15

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword(){
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for(let i = 0; i < passwordLenght; i++){
        randomPasswordOne += getRandomCharacter()
        randomPasswordTwo += getRandomCharacter()
    }   
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
}