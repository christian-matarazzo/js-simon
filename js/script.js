//recover DOM nodes

const countdownEl = document.getElementById('countdown')
const instructionsEl = document.getElementById('instructions')
const startButtonEl = document.getElementById('startButton')
const numberListEl = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')

/* console.log(countdownEl, instructionsEl, startButtonEl, numberListEl, answersForm); */


//display 5 random numbers after the start click, and start a 30 second countdown


let numberList = [] //empty array for our numbers


let countdown = 30
let timer 
//on click populate the number list and start count down
startButtonEl.addEventListener('click', function(){

    instructionsEl.classList.add('d-none')
    startButtonEl.classList.add('d-none')
    
    for (let i = 0; i < 5; i++) { //cycle FOR 5 times to get the random numbers
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        numberList.push(randomNumber) //push the numbers
        
    }
    
    /* console.log(numberList); */
    numberListEl.innerText = numberList //populate the list 

    timer = setInterval (function() {
        countdown --
        countdownEl.innerText = countdown
        
        if (countdown === 0)
            {
                clearInterval(timer)
                countdownEl.innerText = "Tempo scaduto inserisci i numeri!"
                answersForm.classList.remove('d-none')
                numberListEl.classList.add('d-none')
            }
            
            
        }, 1000)
})




