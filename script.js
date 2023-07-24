console.log('Welcome to spotify');
//initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let  masterPlay=document.getElementById('masterPlay');
let myprogressbar= document.getElementById('myprogressbar');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let gif= document.getElementById('gif');
let songs=[
    {songName: "Sala-e-Ishq" , filepath:"songs/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Isq" , filepath:"songs/2.mp3", coverPath:"cover/2.jpg"},
    {songName: "Salam-e-shq" , filepath:"songs/3.mp3", coverPath:"cover/3.jpg"},
    {songName: "Salam-e-Ihq" , filepath:"songs/4.mp3", coverPath:"cover/4.jpg"},
    {songName: "Salam-ehq" , filepath:"songs/5 .mp3", coverPath:"cover/5.jpg"}, 
    {songName: "Salam-e-q" , filepath:"songs/6 .mp3", coverPath:"cover/6.jpg"}, 
    {songName: "Sal-Ishq" , filepath:"songs/7 .mp3", coverPath:"cover/7.jpg"}, 
    {songName: "S-e-Ishq" , filepath:"songs/8 .mp3", coverPath:"cover/8.jpg"}, 
    {songName: "SalaIshq" , filepath:"songs/9.mp3", coverPath:"cover/9.jpg"}, 
    {songName: "Salam" , filepath:"songs/10 .mp3", coverPath:"cover/10.jpg"}, 
]
 
// audiElement.play()
//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(' fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add(' fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
});

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})
 

myprogressbar.addEventListener('change' , ()=>{
    audioElement
    .currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-2x fa-circle-pause');
        element.classList.add('fa-solid fa-2x fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-solid fa-2x fa-circle-play');
        e.target.classList.add('fa-solid fa-2x fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-2x fa-circle-play');
        masterPlay.classList.add('fa-solid fa-2x fa-circle-pause');
    })
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-2x fa-circle-play');
    masterPlay.classList.add('fa-solid fa-2x fa-circle-pause');
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-2x fa-circle-play');
    masterPlay.classList.add('fa-solid fa-2x fa-circle-pause');

})
