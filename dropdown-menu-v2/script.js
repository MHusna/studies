function openChoiceContainer(className){
    var choiceContainer = document.getElementsByClassName('choice-container')[0];    
    choiceContainer.style.display == "none" ? choiceContainer.style.display = "block" : choiceContainer.style.display = "none";
}

function over(className){
    var overElement = document.getElementsByClassName(className)[0];
    overElement.style.color = "white";
}

function out(className){
    var overElement = document.getElementsByClassName(className)[0];
    overElement.style.color = "rgba(255, 255, 255, 0.8)";
}