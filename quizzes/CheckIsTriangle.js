var angles = document.querySelectorAll(".angle");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector(".output");

function verifyAngles(){
    var sum = 0;
    for(angle of angles){
        if(angle.value > 0 && angle.value < 180){
            sum += Number(angle.value);
        } else {
            showMessage("Ooops! Enter correct values!")
            return;
        }
    }
    
    if(sum === 180){
        showMessage("Yes! These angles will form a triangle!")
    } else {
        showMessage("No! Such angles cannot form a triangle!")
    }
}

function showMessage(message){
    output.innerText = message;
}

checkBtn.addEventListener("click", verifyAngles);