var quizForm = document.querySelector(".quiz-form");
var checkBtn = document.querySelector("#submit-btn");
var retryBtn = document.querySelector("#retry-btn")
var output = document.querySelector(".message");
var quizAnswers = ["All its sides are equal", "The longest side of triangle", "Obtuse triangle", "Perimeter", "Pythagoras"];

function compareValues(quizResults){
    let score = 0, index = 0;
    for (let answer of quizResults ){

        if(quizAnswers.includes(answer)){
            score++;
        }
        index++;
    }

    if(score > 2){
        showMessage(`Your score is: ${score}. You're a Trianglist!!`)
    } else {
        showMessage(`Your score is: ${score}. You need to revise your concepts!`)
    }
}

function getResult(){
    const quizResults = new FormData(quizForm);
    compareValues(quizResults.values())
}

function showMessage(message){
    output.innerText = message;
    checkBtn.style.display = "none";
    retryBtn.style.display = "block"
}

retryBtn.style.display = "none";
checkBtn.addEventListener("click", getResult);