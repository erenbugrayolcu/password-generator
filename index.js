const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')

passwordOne.style.width = "180px"
passwordOne.style.height = "32px"
passwordOne.style.fontStyle = "normal"
passwordOne.style.fontWeight = "500"
passwordOne.style.fontSize = "16px"
passwordOne.style.lineHeight = "32px"
passwordOne.style.textAlign = "center"
passwordOne.style.color = "#55F991"

passwordTwo.style.width = "180px"
passwordTwo.style.height = "32px"
passwordTwo.style.fontStyle = "normal"
passwordTwo.style.fontWeight = "500"
passwordTwo.style.fontSize = "16px"
passwordTwo.style.lineHeight = "32px"
passwordTwo.style.textAlign = "center"
passwordTwo.style.color = "#55F991"


function generatePassword(){
    for(let i = 0; i < characters.length; i++){
        let randomPasswordOne = Math.floor(Math.random() * characters.length)
        let randomPasswordTwo = Math.floor(Math.random() * characters.length)
        passwordOne.textContent = characters[randomPasswordOne]
        passwordTwo.textContent = characters[randomPasswordTwo]
    }   
}