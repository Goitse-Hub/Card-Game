// let firstCard = randomNumber();
// let secondCard = randomNumber();
// let cardsArray = [firstCard, secondCard]
// let sum = firstCard + secondCard 


let cardsArray = []
let sum = 0
let gotBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function randomNumber(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1){
        return 11
    } else if (randomNum >= 11){ //or  || randomNum === 12 || randomNum === 13
        return 10
    } else {    
    return randomNum
    }
}

function startGame(){
    
    isAlive = true
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cardsArray= [firstCard, secondCard]     
    // cardsArray = secondCard
    sum = firstCard + secondCard
    
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
    if (isAlive === true && gotBlackJack === false){
        console.log("Drawig A New Card") //Console Log For Texting Purposes
        let card = randomNumber();         
        sum += card
        cardsArray.push(card)
        renderGame()
    }
    
}
 