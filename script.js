console.log("hello spotify");
let songindex = 0;
let audioelement = new Audio('1.mp3')
//let masterplay = document.getElementsByClassName("play");
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName('songitem'))
let mastersongname = document.getElementById("mastersongname");
let songitemplay= document.getElementsByClassName('songitemplay')
console.log(masterplay);

let song =
   [{ songname: " 1", filepath: "1.mp3", coverpath: "1.jpg" },
   { songname: " 2", filepath: "2.mp3", coverpath: "2.jpg" },
   { songname: " 3", filepath: "3.mp3", coverpath: "3.jpg" },
   { songname: " 4", filepath: "4.mp3", coverpath: "4.jpg" },
   { songname: " 5", filepath: "4.mp3", coverpath: "5.jpg" },
   { songname: " 6", filepath: "6.mp3", coverpath: "6.jpg" },
   { songname: " 7", filepath: "7.mp3", coverpath: "7.jpg" },
   { songname: " 8", filepath: "8.mp3", coverpath: "8.jpg" },
   { songname: " 9", filepath: "9.mp3", coverpath: "9.jpg" },
   { songname: " 10", filepath: "1.mp3", coverpath: "1.jpg" },
   { songname: " 11", filepath: "2.mp3", coverpath: "2.jpg" },
   { songname: " 12", filepath: "3.mp3", coverpath: "3.jpg" }
   ]
songitem.forEach((element, i) => {
   console.log(element, i);
   element.getElementsByTagName('img')[0].src = song[i].coverpath;
   element.getElementsByClassName('songname')[0].innerHTML = song[i].songname;
});

 
let a = () => {
   console.log("index nmber is- "+ songindex);
   console.log("song is play");
   if (audioelement.paused || audioelement.currentTime <= 0) {
      audioelement.play();
      masterplay.classList.remove("fa-play-circle")
      masterplay.classList.add("fa-pause-circle")
      gif.style.opacity = 1;
       
   }
   else {
      audioelement.pause();
      masterplay.classList.remove("fa-pause-circle")
      masterplay.classList.add("fa-play-circle")
      gif.style.opacity = 0;
       
   }

}
 
   masterplay.addEventListener('click', a)

 
audioelement.addEventListener('timeupdate', () => {
   console.log("timeupdate");
   progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
   myprogressbar.value = progress;
})



myprogressbar.addEventListener("change", () => { //console.log(e.target)
   audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

function makeallplay() {
   Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
   })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
   element.addEventListener('click', (e) => {  //console.log(e.target);
     if(audioelement.paused)
     {
      songindex = parseInt(e.target.id);
      makeallplay();

     e.target.classList.remove("fa-play-circle")
       e.target.classList.add("fa-pause-circle")
      audioelement.src = `${songindex + 1}.mp3`
      mastersongname.innerText= song[songindex].songname
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
     }
     else
     {
      songindex = parseInt(e.target.id);
      makeallplay();

       e.target.classList.add("fa-play-circle")
       e.target.classList.remove("fa-pause-circle")
      audioelement.src = `${songindex + 1}.mp3`
      mastersongname.innerText= song[songindex].songname
      audioelement.currentTime = 0;
      audioelement.pause();
      gif.style.opacity = 0;
      masterplay.classList.add("fa-play-circle");
      masterplay.classList.remove("fa-pause-circle");
        
     
      
     }
      

   })
});
  
    

document.getElementById('next').addEventListener('click', () => {
   if (songindex >= 9) {
      songindex = 0

   }
   else {
      songindex += 1;

   }
   audioelement.src = `${songindex}.mp3`
   audioelement.currentTime = 0;
   audioelement.play();
   gif.style.opacity = 1;
   mastersongname.innerText= song[songindex].songname
   masterplay.classList.remove("fa-play-circle");
   masterplay.classList.add("fa-pause-circle");

})
document.getElementById('previous').addEventListener('click', () => {
   if (songindex <= 1) {
      songindex = 0;

   }
   else {
      songindex -= 1;

   }
   audioelement.src = `${songindex}.mp3`
   audioelement.currentTime = 0;
   mastersongname.innerText= song[songindex].songname
   audioelement.play();
   gif.style.opacity = 1;
   masterplay.classList.remove("fa-play-circle");
   masterplay.classList.add("fa-pause-circle");

})

/*masterplay.addEventListener('click', (e)=>
{ if(audioelement.paused)
   {songitemplay.classList.remove("fa-play-circle")
   songitemplay.classList.add("fa-pause-circle")
   }
   else{ songitemplay.classList.add("fa-play-circle")
   songitemplay.classList.remove("fa-pause-circle")
   

   }
})
*/









