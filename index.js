function playmusic_1(){
       var audio = document.getElementById("audio");
       audio.play();
}

function playmusic_2(){
       var audio = document.getElementById("audio");
       audio.play();
}

function playmusic_3(){
       var audio = document.getElementById("audio");
       audio.play();
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 49) {
        audio.play();
    }
}, true);
