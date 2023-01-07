function showHideItems(clsName) {

    var itemsHolder = document.getElementsByClassName(clsName)[0];
    var iconButton = document.getElementsByClassName("icon-style")[0];
    var itemStyle = itemsHolder.style;

    itemStyle.display == "block" ? iconButton.innerHTML = "arrow_drop_down" : iconButton.innerHTML = "arrow_drop_up";
    itemStyle.display == "block" ? itemStyle.display = "none" : itemStyle.display = "block";
    itemStyle.top = "0";

}

function slideBg(index) {

    var slider = document.getElementsByClassName("slider")[0];
    var itemsHolder = document.getElementsByClassName("dropdown-items")[0];

    var ul = itemsHolder.children[1];
    var listItems = ul.children;
    var clicked = listItems[index].firstElementChild;
    var distance = clicked.offsetTop;

    slider.style.opacity = "1";
    slider.style.top = distance + "px";
    slider.style.transition = "0.5s";

}

function clickItem(index) {

    var text = document.getElementsByClassName("text")[0];
    var itemsHolder = document.getElementsByClassName("dropdown-items")[0];

    var ul = itemsHolder.children[1];
    var listItems = ul.children;

    var clicked = listItems[index].firstElementChild;
    text.innerHTML = clicked.innerHTML;

}

function sliderHide() {

    var slider = document.getElementsByClassName("slider")[0];
    slider.style.opacity = "0";

}