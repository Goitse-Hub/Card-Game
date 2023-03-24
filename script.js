
let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard 
let gotBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2:00:00
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame(){

    console.log("Game Starts")
    console.log("These Are Calculations")
    console.log(firstCard)
    console.log(secondCard)
    console.log(sum)

    if (sum <= 20){
        message = "Do You Want To Draw A New Card"
        sumEl.textContent = "Sum: " + sum    
    } else if (sum === 21){
        message = "You've Got The Blackjack"    
        gotBlackJack = true
        sumEl.textContent = "Sum: " + sum  
    } else if (sum > 21){    
        message = "You're out of the game"  
        isAlive = false
        sumEl.textContent = "Sum: " + sum  
    }

    messageEl.textContent = message
    console.log(isAlive)
    console.log(gotBlackJack)
    console.log(message)
}


// console.log("These Are Calculations")
// console.log(firstCard)
// console.log(secondCard)
// console.log(sum)

// if (sum <= 20){
//     message = "Do You Want To Draw A New Card"    
// } else if (sum === 21){
//     message = "You've Got The Blackjack"    
//     gotBlackJack = true
// } else if (sum > 21){    
//     message = "You're out of the game"  
//     isAlive = false
// }

// console.log(isAlive)
// console.log(gotBlackJack)
// console.log(message)

// let age = 101

// if (age < 100){
//     console.log("Not Eligible")
// } else if ( age === 100) {
//     console.log("Here is your birthday card from the king")
// } else{
//     console.log("Not Eligible, you've already gotten one")
// }

// 1:45:00