var minutes = 0
var seconds = 0
var milliseconds = 0
var gethtmlmin = document.getElementById('min')
var gethtmlsec = document.getElementById('sec')
var gethtmlmsec = document.getElementById('msec')
var interval;

function start(){
    interval = setInterval(function(){
        milliseconds++
        gethtmlmsec.innerHTML = milliseconds



        if(milliseconds >=100){
            seconds++
            gethtmlsec.innerHTML = seconds
            milliseconds = 0
        }
        else if(seconds >= 60){
            minutes++
            gethtmlmin.innerHTML = minutes
            seconds = 0
        }
       
    },10);

    document.getElementById('btn').disabled = true
    }

    function pause(){
        clearInterval(interval)
        document.getElementById('btn').disabled = false
    }

    function reset(){
        minutes = 0
        seconds = 0
        milliseconds = 0

        document.getElementById('btn').disabled = false
        clearInterval(interval);
        gethtmlmin.innerHTML = minutes
        gethtmlsec.innerHTML = seconds
        gethtmlmsec.innerHTML = milliseconds
    
    
    
        }

    


