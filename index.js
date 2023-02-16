let message= ""
let messageEl = document.getElementById("message-el")
let password = []
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let passwordButton = document.getElementById("passwordButton")

passwordButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor( Math.random() * characters.length)
    let randomIndexTwo = Math.floor( Math.random() * characters.length)
    passwordEl1.textContent(characters[randomIndexOne])
    passwordEl2.textContent(characters[randomIndexTwo])
})  