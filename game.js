var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


$(".btn").click(function () {
    var userChosenColour = $(this).attr('id');
    console.log(this);
    
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

});

function nextSequence() {
    
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColours = buttonColours[randomNumber];// permet de choisir une couleur au hasard.
    console.log(randomChosenColours);

    gamePattern.push(randomChosenColours);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);//choisir la couleur + l'id dans le html.
    
    var audio = new Audio("sounds/" + randomChosenColours + ".mp3");
    audio.play();
}


