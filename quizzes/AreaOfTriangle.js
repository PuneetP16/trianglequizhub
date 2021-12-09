var baseValue = document.querySelector(".base-input");
var heightValue = document.querySelector(".height-input");
var areaBtn = document.querySelector("#area-btn");
var output = document.querySelector(".area-output");

function calcArea(base, height){
    const area = 0.5 * base * height;
    return area;
}

function getValues(){
    const base = baseValue.value;
    const height = heightValue.value;
    
    if( base && height){
        if(base > 0 && height > 0){
            const area = calcArea(base, height);
            showMessage(`Triangle's area: ${area.toFixed(2)} cm²`);
        } else {
            showMessage("Such a triangle cannot exist! Please check your values!")
        }
    } else {
        showMessage("Error! fill all fields")
    }

}

function showMessage(message){
    output.innerText = message;
}

areaBtn.addEventListener("click", getValues);