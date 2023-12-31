console.log("Lyric Heals");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kali Raat - Kalam Ink", filePath: "songs/1.mp3", coverPath: "images/1.jpg"},
    {songName: "Meri Tarha - Akhil Redhu", filePath: "songs/2.mp3", coverPath: "images/2.jpg"},
    {songName: "Live without Regret - Akhil Redhu", filePath: "songs/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Safar - Kalam Ink", filePath: "songs/4.mp3", coverPath: "images/4.jpg"},
    {songName: "I'm Tired -THE RDX", filePath: "songs/5.mp3", coverPath: "images/5.jpg"},
    {songName: "K.Y.U - Kalam Ink", filePath: "songs/6.mp3", coverPath: "images/6.jpg"},
    {songName: "Downer at Dusk — Talha Anjum", filePath: "songs/7.mp3", coverPath: "images/7.jpg"},
    {songName: "Laga Reh - Young Stunners", filePath: "songs/8.mp3", coverPath: "images/8.jpg"},
    {songName: "Gumaan – Young Stunners", filePath: "songs/9.mp3", coverPath: "images/9.jpg"},
    {songName: "Sweet Poison - Bella", filePath: "songs/10.mp3", coverPath: "images/10.jpg"},
    {songName: "Happy Hour - Talha Anjum", filePath: "songs/11.mp3", coverPath: "images/11.jpg"},
    {songName: "The Gangsters Mashup - Sidhu Moose Wala X Shubh", filePath: "songs/12.mp3", coverPath: "images/12.jpg"},
    {songName: "Kachcha Ghada Hun Main - Rahgir Live", filePath: "songs/13.mp3", coverPath: "images/13.jpg"},
    {songName: "Two Tone - Talha Anjum", filePath: "songs/14.mp3", coverPath: "images/14.jpg"},
    {songName: "Why Me - Infinite", filePath: "songs/15.mp3", coverPath: "images/15.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
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
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

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
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})