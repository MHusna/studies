function movement(number){
    var slider = document.getElementById("slider");
    var clicked = document.getElementsByClassName('content')[number].getElementsByTagName('a')[0];

    for(var i = 0; i < 3; i++){
        var other = document.getElementsByClassName('content')[i].getElementsByTagName('a')[0];
        other.style.color = "black";
    }

    slider.style.transition = "0.5s";
    clicked.style.color = "white";
    slider.style.left = clicked.offsetLeft + "px";
}
