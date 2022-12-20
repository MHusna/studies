function cardNumberFocus(toClass){
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.style.border = "2px solid white";
    divElement.style.borderRadius = "5px";
}

function cardNumberChange(fromClass, toClass){
    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContent = inputElement.value;

    console.log(inputContent);
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = inputContent;    
}

function cardNumberLoseFocus(toClass){
    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.style.border = "none";
}

function cardDayChange(fromClass, toClass){

    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContent = inputElement.value;

    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = inputContent;
}

function cardRotate(toClass1, toClass2){

    var frontCard = document.getElementsByClassName(toClass1)[0];
    var backCard = document.getElementsByClassName(toClass2)[0];
    
    frontCard.style.transform = "rotateY(180deg)";
    frontCard.style.transition = "1s";
    frontCard.style.zIndex = "-1";

    backCard.style.transform = "rotateY(0deg)";
    backCard.style.transition = "1s";
    backCard.style.zIndex = "1";
}

function cardCvvChange(fromClass, toClass){

    var inputElement = document.getElementsByClassName(fromClass)[0];
    var inputContentCount = inputElement.value.length;

    var divElement = document.getElementsByClassName(toClass)[0];
    divElement.innerHTML = "";

    for(var i = 0; i < inputContentCount; i++){
        divElement.innerHTML += "*";
    }
}

function cardCvvLoseFocus(toClass1, toClass2){
    var frontCard = document.getElementsByClassName(toClass1)[0];
    var backCard = document.getElementsByClassName(toClass2)[0];

    backCard.style.transform = "rotateY(-180deg)";
    backCard.style.transition = "1s";
    backCard.style.zIndex = "-1";
    backCard.opacity = "0";

    frontCard.style.transform = "rotateY(0deg)";
    frontCard.style.transition = "1s";
    frontCard.style.zIndex = "1";

}