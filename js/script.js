//recover DOM nodes

const countdownEl = document.getElementById('countdown')
const instructionsEl = document.getElementById('instructions')
const startButtonEl = document.getElementById('startButton')
const numberListEl = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const inputFieldsEl = document.querySelectorAll('#input-group input') //we need to get all the input one by one, but we can work around with a query selection of their id and class
const messageEl = document.getElementById('message')

/* console.log(countdownEl, instructionsEl, startButtonEl, numberListEl, answersForm); */


//display 5 random numbers after the start click, and start a 30 second countdown

// our global variables goes here (WIP some can be added)
let numberList = [] //empty array for our numbers
let countdown = 30 //countdown 
let timer //timer empty variable 
let userAnswer = [] //user answers
let correctAnswer = [] //user correct answers

//
//on click populate the number list and start count down
startButtonEl.addEventListener('click', function () {

    instructionsEl.classList.add('d-none')
    startButtonEl.classList.add('d-none')

    for (let i = 0; i < 5; i++) { //cycle FOR 5 times to get the random numbers
        const randomNumber = Math.floor(Math.random() * 50) + 1; //generate 50 random numbers
        if (numberList.includes(randomNumber)) { //if the number is already in the list, go back by 1 and repeat
            i--
        }
        else {
            numberList.push(randomNumber) //push the numbers
        }

    }

    /* console.log(numberList); */
    numberListEl.innerText = numberList //populate the list 

    timer = setInterval(function () { //here we create our timer using setInterval and subtraction on countdown (starting value 30)
        countdown--
        countdownEl.innerText = countdown

        if (countdown === 0) //IF our timer reach 0
        {
            clearInterval(timer) //stop the subtraction on countdown
            countdownEl.innerText = "Tempo scaduto inserisci i numeri!" //modify inner text
            answersForm.classList.remove('d-none')  //remove elements that we dont need 
            numberListEl.classList.add('d-none') //remove elements that we dont need 
        }


    }, 1000)
})

//we need to get the user answer to = with our array



answersForm.addEventListener('submit', function (e) { //we need user submit, but we must avoid refresh 
    e.preventDefault() //no refresh

    for (let i = 0; i < inputFieldsEl.length; i++) { //cycle the inputFieldsEl array
        const userNumber = parseInt(inputFieldsEl[i].value); //parseInt convert the string to number, we transfer the value of inputFieldsEl on userNumber

        userAnswer.push(userNumber) // we push userNumber in userAnswer after cycling

        if (numberList.includes(userNumber) && !correctAnswer.includes(userNumber)) { //IF numberList include value from userNumber AND correctAnswer NOT include already userNumber

            correctAnswer.push(userNumber) //we push the value in correct answer

        }
    }
    /* console.log(userAnswer); */
    console.log("Numeri inseriti dall'utente:", userAnswer);
    console.log("Numeri indovinati:", correctAnswer);

    messageEl.innerText = `Hai indovinato: ${correctAnswer.length} numeri. I numeri indovinati sono ${correctAnswer}  I numeri da indovinare erano ${numberList}` //now the user can see the result of the game and the number he got 
})

/* console.log(inputFieldsEl); */




