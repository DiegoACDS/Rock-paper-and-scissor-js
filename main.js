// generate computer choice
const choices = ['rock', 'paper', 'scissor']
let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    const getNumber = Math.floor(Math.random() * choices.length)
    return choices[getNumber]

}
// get user choice
function getUserChoice() {
    const user = prompt('Type your choice, Rock, Paper, Scissor').toLocaleLowerCase()
    //verifica se a entrada é valida
    while (!choices.includes(user)){
        user = prompt('Type your choice, Rock, Paper, Scissor').toLocaleLowerCase()
    }
    return user
}

// start game

function startGame() {
    const computer = getComputerChoice()
    const user = getUserChoice() 

    console.log(`you chose ${user}. And the computer chose ${computer}.`)

    if( user == "rock" && computer == "scissor" ||
        user == "paper" && computer == "rock" ||
        user == "scissor" && computer == "paper" 
     ){
        console.log('You win this Round!')
        humanScore++
     } else if (user === computer ) {
        console.log('It\'s a tie!')
     } else {
        console.log('Computer wins this Round.')
        computerScore++
     } 
}

// playing rounds

function playRound() {
    let round = 0
    while (round < 5) {
        startGame()
        round++
    }
    if(humanScore > computerScore) {
        console.log('You win the game')
    } else if (humanScore < computerScore) {
        console.log('You lose the game')
    } else {
        console.log('The game is a draw')
    }
    if (round = 5 ) {
        console.log(`THE FINAL RESULT\n HUMAN ${humanScore}\n COMPUTER ${computerScore}`)
    }
}
humanScore = 0
computerScore = 0
playRound()
