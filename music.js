const songs=[

{
title:"Song One",
artist:"Unknown Artist",
src:"music1.mp3",
cover:"image1.jpg"
},

{
title:"Song Two",
artist:"Unknown Artist",
src:"music2.mp3",
cover:"image2.jpg"
},

{
title:"Song Three",
artist:"Unknown Artist",
src:"music3.mp3",
cover:"image3.webp"
}

];

const audio=document.getElementById("audio");

const playBtn=document.getElementById("play");

const prevBtn=document.getElementById("prev");

const nextBtn=document.getElementById("next");

const progress=document.getElementById("progress");

const title=document.getElementById("title");

const artist=document.getElementById("artist");

const cover=document.getElementById("cover");

const current=document.getElementById("current");

const duration=document.getElementById("duration");

let index=0;

let playing=false;

loadSong(index);

function loadSong(i){

title.textContent=songs[i].title;

artist.textContent=songs[i].artist;

cover.src=songs[i].cover;

audio.src=songs[i].src;

}

playBtn.onclick=function(){

if(playing){

audio.pause();

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

playing=false;

}

else{

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

playing=true;

}

}

nextBtn.onclick=function(){

index++;

if(index>=songs.length){

index=0;

}

loadSong(index);

audio.play();

playing=true;

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

prevBtn.onclick=function(){

index--;

if(index<0){

index=songs.length-1;

}

loadSong(index);

audio.play();

playing=true;

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

audio.addEventListener("timeupdate",()=>{

const percent=(audio.currentTime/audio.duration)*100;

progress.value=percent||0;

current.textContent=format(audio.currentTime);

duration.textContent=format(audio.duration);

});

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;

});

audio.addEventListener("ended",()=>{

nextBtn.click();

});

function format(time){

if(isNaN(time)) return "0:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}
