// CHRONOMETRE

let minutes = document.getElementById("chrono_minutes");
let secondes = document.getElementById("chrono_secondes");
let centiemes = document.getElementById("chrono_centiemes");

let button_play = document.getElementById("chrono_button_play");
let button_pause = document.getElementById("chrono_button_pause");
let button_time = document.getElementById("chrono_button_time");
let button_stop = document.getElementById("chrono_button_stop");


function start(){
    update_chrono();
}

function update_chrono(){
    setInterval(update_minutes, 60000);
    setInterval(update_secondes, 1000);
    setInterval(update_centiemes, 10);
}

function update_minutes(){
    if(parseInt(minutes.textContent)>=59){
        minutes.textContent = "00"
    }
    
    if(parseInt(minutes.textContent)>8){
        minutes.textContent = parseInt(minutes.textContent)+1; 
    }else{
        minutes.textContent = "0"+(parseInt(minutes.textContent)+1);
    }
}

function update_secondes(){
    if(parseInt(secondes.textContent)>=59){
        secondes.textContent = "00"
    }
    if(parseInt(secondes.textContent)>8){
       secondes.textContent = parseInt(secondes.textContent)+1; 
    }else{
        secondes.textContent = "0"+(parseInt(secondes.textContent)+1);
    }
}

function update_centiemes(){
    if(parseInt(centiemes.textContent)>=99){
        centiemes.textContent = "00"
    }
    if(parseInt(centiemes.textContent)>8){
        centiemes.textContent = parseInt(centiemes.textContent)+1; 
    }else{
        centiemes.textContent = "0"+(parseInt(centiemes.textContent)+1);
    }
}

button_play.addEventListener("click",start);

button_pause.addEventListener("click",function(){console.log('coucou')});

