function play(){
       var audio = document.getElementById("audio");
       audio.play();
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 49) {
        audio.play();
    }
}, true);
