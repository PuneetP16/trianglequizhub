var baseValue = document.querySelector(".base-input")
var heightValue = document.querySelector(".height-input")
var hypBtn = document.querySelector("#hyp-btn")
var output = document.querySelector(".hyp-output")

function calcHypotenuse(base, height){
    const getHyp = Math.sqrt( (base*base) + (height*height) );
    return getHyp; 
}

function getValues(){
    const base = baseValue.value;
    const height = heightValue.value;
    if( base && height){
        if(base > 0 && height > 0){
            const hyp = calcHypotenuse(base, height);
            showMessage(`Hypotenuse: ${hyp.toFixed(2)} cm`);
        } else {
            showMessage("Such a triangle cannot exist! Retry!")
        }
    } else {
        showMessage("Error!! fill all fields!");
    }
}

function showMessage(message){
    output.innerText = message;
}

hypBtn.addEventListener("click", getValues)