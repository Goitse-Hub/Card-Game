let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cardsArray = [firstCard, secondCard]
let sum = firstCard + secondCard 
let gotBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame() 
}

function renderGame(){

    //Console Log For Texting Purposes
    console.log("Game Starts")
    console.log("These Are Calculations")
    console.log(cardsArray[0])
    console.log(cardsArray[1])
    console.log(sum)
    
    cardsEl.textContent = "Cards: "
  
    for (let index = 0; index < cardsArray.length; index++) {
        const element = cardsArray[index];
        cardsEl.textContent += element + " "        
    }

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
    //Console Log For Texting Purposes
    console.log(isAlive)
    console.log(gotBlackJack)
    console.log(message)
}

function newCard(){
    console.log("Drawig A New Card") //Console Log For Texting Purposes
    let card = Math.floor(Math.random() * 10) + 2;         
    sum += card
    cardsArray.push(card)
    renderGame()
}
