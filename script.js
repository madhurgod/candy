/* =====================================
   TO MY SWEET CANDY 🍬
   MADE BY MADHUR ❤️
=====================================*/

// ------------------------------
// PRELOADER
// ------------------------------

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1800);

});

// ------------------------------
// TYPING EFFECT
// ------------------------------

const texts=[

"You are my favorite person ❤️",

"My happiest place is with you 🌸",

"Forever isn't enough with you 💖",

"I'll always choose you, Candy 🍬"

];

let textIndex=0;
let charIndex=0;

const typing=document.getElementById("typingText");

function type(){

if(charIndex<texts[textIndex].length){

typing.innerHTML+=texts[textIndex].charAt(charIndex);

charIndex++;

setTimeout(type,70);

}

else{

setTimeout(erase,1800);

}

}

function erase(){

if(charIndex>0){

typing.innerHTML=texts[textIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,35);

}

else{

textIndex++;

if(textIndex>=texts.length){

textIndex=0;

}

setTimeout(type,350);

}

}

type();

// ------------------------------
// RELATIONSHIP TIMER
// ------------------------------

// Change this to your special date ❤️

const startDate=new Date("2025-01-01T00:00:00");

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor(diff/3600000)%24;

const minutes=Math.floor(diff/60000)%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

updateTimer();

setInterval(updateTimer,1000);

// ------------------------------
// HERO BUTTONS
// ------------------------------

document.getElementById("letterBtn").onclick=()=>{

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

};

document.getElementById("memoryBtn").onclick=()=>{

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

};

// ------------------------------
// ENVELOPE
// ------------------------------

const envelope=document.getElementById("envelope");

envelope.onclick=()=>{

envelope.classList.toggle("open");

};

// ------------------------------
// SCROLL REVEAL
// ------------------------------

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.classList.add("fadeIn");

}

});

});
/* =====================================
   PREMIUM MUSIC PLAYER
=====================================*/

const audio = document.getElementById("audioPlayer");

const playPause = document.getElementById("playPause");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

const seekBar = document.getElementById("seekBar");
const volume = document.getElementById("volume");

const songName = document.getElementById("songName");

const playlist=[

{
title:"Forever With You ❤️",
src:"music/song1.mp3"
},

{
title:"My Sweet Candy 🍬",
src:"music/song2.mp3"
}

];

let currentSong=0;
let playing=false;
let repeatMode=false;

loadSong(currentSong);

function loadSong(index){

audio.src=playlist[index].src;

songName.innerHTML=playlist[index].title;

}

playPause.onclick=function(){

if(!playing){

audio.play();

playing=true;

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

}

else{

audio.pause();

playing=false;

playPause.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

next.onclick=function(){

currentSong++;

if(currentSong>=playlist.length){

currentSong=0;

}

loadSong(currentSong);

audio.play();

playing=true;

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

};

previous.onclick=function(){

currentSong--;

if(currentSong<0){

currentSong=playlist.length-1;

}

loadSong(currentSong);

audio.play();

playing=true;

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

};

shuffle.onclick=function(){

currentSong=Math.floor(Math.random()*playlist.length);

loadSong(currentSong);

audio.play();

playing=true;

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

};

repeat.onclick=function(){

repeatMode=!repeatMode;

audio.loop=repeatMode;

repeat.style.background=repeatMode?

"#ff5ea8":

"";

};

audio.addEventListener("timeupdate",()=>{

const progress=(audio.currentTime/audio.duration)*100;

seekBar.value=progress||0;

});

seekBar.addEventListener("input",()=>{

audio.currentTime=(seekBar.value/100)*audio.duration;

});

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

audio.addEventListener("ended",()=>{

if(!repeatMode){

next.click();

}

});

/* =====================================
   KEYBOARD SHORTCUTS
=====================================*/

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

playPause.click();

}

if(e.key==="ArrowRight"){

next.click();

}

if(e.key==="ArrowLeft"){

previous.click();

}

});

/* =====================================
   AUTO PLAY WHEN USER CLICKS PAGE
=====================================*/

document.body.addEventListener("click",()=>{

if(!playing){

audio.play().then(()=>{

playing=true;

playPause.innerHTML='<i class="fa-solid fa-pause"></i>';

}).catch(()=>{});

}

},{once:true});

/* =====================================
   END PART 2
=====================================*/
/* =====================================
   PREMIUM GALLERY
=====================================*/

const galleryImages=document.querySelectorAll(".memoryCard img");

const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");
const prevImage=document.getElementById("prevImage");
const nextImage=document.getElementById("nextImage");

let currentImage=0;

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){

lightboxImage.src=galleryImages[currentImage].src;

}

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

nextImage.onclick=()=>{

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

showImage();

};

prevImage.onclick=()=>{

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

showImage();

};

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="Escape") closeLightbox.click();

if(e.key==="ArrowRight") nextImage.click();

if(e.key==="ArrowLeft") prevImage.click();

}

});

/* =====================================
   100 REASONS
=====================================*/

const reasons=[

"Because your smile brightens my day. ❤️",
"Because you make me feel loved. 🥰",
"Because your laugh is my favorite sound.",
"Because you're beautiful inside and out.",
"Because you believe in me.",
"Because life is happier with you.",
"Because you're my safe place.",
"Because every memory with you is special.",
"Because you never fail to make me smile.",
"Because you're simply my Candy 🍬."

];

const reasonNumber=document.getElementById("reasonNumber");
const reasonText=document.getElementById("reasonText");

let reasonIndex=0;

document.getElementById("nextReason").onclick=()=>{

reasonIndex++;

if(reasonIndex>=reasons.length){

reasonIndex=0;

}

reasonNumber.innerHTML="Reason #"+(reasonIndex+1);

reasonText.innerHTML=reasons[reasonIndex];

};

/* =====================================
   SURPRISE BUTTON
=====================================*/

const surpriseMessages=[

"❤️ I love you more every day.",

"🌸 You are my favorite person.",

"🍬 You're the sweetest part of my life.",

"🥹 Thank you for always being you.",

"💕 Forever isn't long enough with you.",

"🌙 I hope every dream of ours comes true.",

"💖 You're my happiness."

];

const surpriseText=document.getElementById("surpriseText");

document.getElementById("surpriseButton").onclick=()=>{

const random=Math.floor(Math.random()*surpriseMessages.length);

surpriseText.innerHTML=surpriseMessages[random];

heartExplosion();

};

/* =====================================
   HEART EXPLOSION
=====================================*/

function heartExplosion(){

for(let i=0;i<35;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=(window.innerWidth/2)+"px";

heart.style.top=(window.innerHeight/2)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999999";

heart.style.fontSize=(18+Math.random()*22)+"px";

document.body.appendChild(heart);

const x=(Math.random()-0.5)*700;
const y=(Math.random()-0.5)*700;

heart.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(0)`,

opacity:0

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

}

/* =====================================
   DARK MODE
=====================================*/

const themeButton=document.getElementById("themeToggle");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

}

themeButton.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

}else{

localStorage.setItem("theme","dark");

}

};

/* =====================================
   FLOATING HEARTS
=====================================*/

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,400);

/* =====================================
   FALLING PETALS
=====================================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},13000);

}

setInterval(createPetal,900);

/* =====================================
   TWINKLING STARS
=====================================*/

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}

/* =====================================
   END
=====================================*/