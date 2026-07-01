let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcons = document.getElementById("ctrlIcons");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause() {
    if (ctrlIcons.classList.contains(fa-pause)){
        song.pause();
    }
    else{
        song.play();
    }
}