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
    const validChoice = choices
    // verifica a entrada
    if(user === null || !validChoice.includes(user)){
        alert("please enter a valid choice")
    }
    return user
}

// start game

function startGame() {
    const computer = getComputerChoice()
    const user = getUserChoice() 

    if( user == "rock" && computer == "scissor" ||
        user == "paper" && computer == "rock" ||
        user == "scissor" && computer == "paper" 
     ){
       return humanScore++
     }else {
        return computerScore++
     }
}

// playing rounds

function playRound() {
    let round = 0
    while (round < 3) {
        startGame()
        if( humanScore > computerScore){
            console.log(`you win `)
        }
        else if(humanScore === computerScore){
            console.log("DRAW GAME")
        }
        else if (humanScore < computerScore){
            console.log("xablau" )
        }
        round ++
    }
}
playRound()

