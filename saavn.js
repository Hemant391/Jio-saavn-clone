console.log('Welcome to console')

//variables
let intoaudio=new Audio("songs/5.mp3")
let decoration=document.getElementById('deco')
let masterplay=document.getElementById('masterplay')
let songindex=0;
let name=document.querySelector('#name')
let next=document.querySelector('#next')
let back=document.querySelector('#back')
let progressbar=document.querySelector('#progressbar')
let songplaylist=Array.from(document.getElementsByClassName('songplaylist'))
let songs=[
    {songname: 'Badnam raja',filepath: 'songs/8.mp3',coverpath:'covers/0.jpg'},
    {songname: 'let me love you',filepath: 'songs/0.mp3',coverpath:'covers/1.jpg'},
    {songname: 'On my way',filepath: 'songs/1.mp3',coverpath:'covers/2.jpg'},
    {songname: 'Jasan',filepath: 'songs/2.mp3',coverpath:'covers/3.jpg'},
    {songname: 'Maut',filepath: 'songs/3.mp3',coverpath:'covers/4.jpg'},
    {songname: 'Chal uth',filepath: 'songs/4.mp3',coverpath:'covers/5.jpg'},
    {songname: 'Chaala',filepath: 'songs/5.mp3',coverpath:'covers/6.jpg'},
    {songname: 'Goliya',filepath: 'songs/6.mp3',coverpath:'covers/7.jpg'},
    {songname: 'Sanam re',filepath: 'songs/7.mp3',coverpath:'covers/8.jpg'},
]

songnamexl.innerHTML=``


songplaylist.forEach((ele,i)=>{
    ele.getElementsByTagName('img')[0].src=songs[i].coverpath;
    ele.getElementsByClassName('song-name')[0].innerHTML=songs[i].songname;
})

let makeallplay=function(){
    Array.from(document.getElementsByClassName('play-icon')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
        })
}
Array.from(document.getElementsByClassName('play-icon')).forEach((element,ind)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target,ind)
        if(e.target.classList.contains('fa-circle-pause')){
            console.log('its contain')
            masterplay.classList.remove('fa-circle-pause')
            masterplay.classList.add('fa-circle-play')
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            intoaudio.pause()
            decoration.style.opacity=0
            decoration.innerHTML=``
        }
        else{
            makeallplay()
            decoration.style.opacity=1
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            intoaudio.src=`songs/${ind}.mp3`
            intoaudio.currentTime=0;
            intoaudio.play();
            songindex=ind
            masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        decoration.innerHTML=``
        songnamexl.innerHTML=`${songs[songindex].songname}`
        }
    })
})



//on clicking on play button
masterplay.addEventListener('click',()=>{
    
    if(intoaudio.paused|| intoaudio.currentTime==0){
        intoaudio.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        decoration.style.opacity=1
        songnamexl.innerHTML=`${songs[songindex].songname}`
    }
    else {
        intoaudio.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        
        decoration.style.opacity=0
    }
})

intoaudio.addEventListener('timeupdate',()=>{
    progress=parseInt((intoaudio.currentTime/intoaudio.duration)*1000)
    progressbar.value=progress
})

progressbar.addEventListener('change',()=>{
    intoaudio.currentTime= (progressbar.value*intoaudio.duration)/1000
})


//empliment the forward button
next.addEventListener('click',()=>{
    songindex++;
if(songindex>8){
    songindex=0
}
    intoaudio.src=`songs/${songindex}.mp3`
    intoaudio.currentTime=0;
    intoaudio.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    songnamexl.innerHTML=`${songs[songindex].songname}`

})

//empliment the backward button
back.addEventListener('click',()=>{
    songindex--;
    if(songindex<0){
        songindex=8
    }
    intoaudio.src=`songs/${songindex}.mp3`
    intoaudio.currentTime=0;
    intoaudio.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    songnamexl.innerHTML=`${songs[songindex].songname}`

})
