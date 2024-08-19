// generate computer choice
const choices = ['rock', 'paper', 'scissor']

let humanScore = 0 
let computerScore = 0
let round = 0

function getComputerChoice() {
    const getNumber = Math.floor(Math.random() * choices.length)
    return choices[getNumber]

}

// start game

function startGame(userChoice) {

    const computer = getComputerChoice()

    console.log(`you chose ${userChoice}. And the computer chose ${computer}.`)

    if( userChoice == "rock" && computer == "scissor" ||
        userChoice == "paper" && computer == "rock" ||
        userChoice == "scissor" && computer == "paper" 
     ){
        console.log('You win this Round!')
        humanScore++
     } else if (userChoice === computer ) {
        console.log('It\'s a tie!')
     } else {
        console.log('Computer wins this Round.')
        computerScore++
     } 
     
    round++

    // playing rounds
     if (round >=5) {
        console.log(`THE FINAL RESULT\n HUMAN ${humanScore}\n COMPUTER ${computerScore}`)
        if (humanScore > computerScore) {
            console.log('You win the game!')
        } else if (humanScore < computerScore) {
            console.log('You lose the game.')
        } else {
            console.log('The game is a draw.')
        }

        // Reseta os Placares para um novo jogo
        humanScore = 0
        computerScore = 0
        round = 0

     }  
}
// btn user choices
const btns = document.querySelectorAll('.btn')
btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        const userChoice = btn.getAttribute('data-choice')
        startGame(userChoice)
    })
})







