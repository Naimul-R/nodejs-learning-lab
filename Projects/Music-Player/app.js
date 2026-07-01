let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcons = document.getElementById("ctrlIcons");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause() {
    if (ctrlIcons.classList.contains("fa-pause")){
        song.pause();
        ctrlIcons.classList.remove("fa-pause");
        ctrlIcons.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcons.classList.add("fa-pause");
        ctrlIcons.classList.remove("fa-play");
    }
}

if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcons.classList.add("fa-pause");
    ctrlIcons.classList.remove("fa-play");
}