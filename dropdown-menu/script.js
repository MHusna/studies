var isOpen = false;
function openList(){
    var selected = document.getElementsByClassName("selected")[0];
    var list = document.getElementsByClassName("list")[0];

    if(isOpen){
        list.style.display = "none";
        selected.style.boxShadow = "rgb(55, 79, 111) 0px 3px 8px";
    }
    else{
        list.style.display = "block";
        selected.style.boxShadow = "rgb(37, 150, 190) 0px 0px 0px 2px, rgb(37, 150, 190) 0px 4px 6px -1px, rgb(37, 150, 190) 0px 1px 0px inset";      
    }

    isOpen = !isOpen;
}

function lightsOn(itemNumber){
    var element = document.getElementsByTagName("a")[itemNumber];
    var slider = document.getElementsByClassName("slider")[0];

    slider.style.top = element.offsetTop + "px";
    element.style.color = "white";
}

function lightsOut(itemNumber){
    var element = document.getElementsByTagName("a")[itemNumber];
    element.style.color = "rgba(255, 255, 255, 0.50)";


}

function changeText(itemNumber){
    var element = document.getElementsByTagName("a")[itemNumber];
    var selected = document.getElementsByTagName("a")[0];

    var childElement = document.createElement("img");
    childElement.src = "media/arrow-down.png";
    childElement.className = "img";

    selected.innerText = element.innerText;
    selected.appendChild(childElement);

    var list = document.getElementsByClassName("list")[0];
    list.style.display = "none";

    selected.style.boxShadow = "rgb(55, 79, 111) 0px 3px 8px";
    isOpen = !isOpen;

}