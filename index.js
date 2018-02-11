function playmusic_1(){
       var audio_1 = document.getElementById("audio_1");
       audio_1.play();
}

function playmusic_2(){
       var audio_2 = document.getElementById("audio_2");
       audio_2.play();
}

function playmusic_3(){
       var audio_3 = document.getElementById("audio_3");
       audio_3.play();
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 49) {
        audio_1.play();
    }else if(event.keyCode == 50){
    	audio_2.play();
    }else if(event.keyCode == 51){
    	audio_3.play();
    }
}, true);
