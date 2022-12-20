var leagueContainer = document.getElementsByClassName("league-container")[0];
var dotaContainer = document.getElementsByClassName("dota-container")[0];

var leagueLeftImg = document.getElementsByClassName("league-left-animated-img")[0];
var leagueRightImg = document.getElementsByClassName("league-right-animated-img")[0];

var dotaImg = document.getElementsByClassName("dota-right-animated-image")[0];

function changeCard(cardName){
    if(cardName === "leagueButton"){
        containerProcess(leagueContainer, 0, 2, 1);
        imgProcess(leagueLeftImg, 1, -50, -30);
        imgProcess(leagueRightImg, 1, -215, 80);

        containerProcess(dotaContainer, -180, -1, 0);
        imgProcess(dotaImg, 0.3, -60, 100);

    }
    else{
        containerProcess(dotaContainer, 0, 2, 1);
        imgProcess(dotaImg, 1, 35, 60);

        containerProcess(leagueContainer, -180, -1, 0);
        imgProcess(leagueLeftImg, 0.3, -30, -15);
        imgProcess(leagueRightImg, 0.3, -130, 80);
    }
}

function mouseOn(index){
    var button = document.getElementsByClassName("button")[index];
    button.style.backgroundImage = "linear-gradient(to right, #fceabb , #f8b500)";
}

function mouseOut(index){
    var button = document.getElementsByClassName("button")[index];
    button.style.backgroundImage = "linear-gradient(to right, #141e30 , #243b55)";
}

function imgProcess(image, scale, top, left){
    image.style.scale = ""+scale;
    image.style.top = top+"%";
    image.style.left = left+"%";
}

function containerProcess(container, degree, indexTier, opacityTier){
    container.style.transform = "rotateY("+degree+"deg)";
    container.style.zIndex = ""+indexTier;
    container.style.opacity = ""+opacityTier;
}