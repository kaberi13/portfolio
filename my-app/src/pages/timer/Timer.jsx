import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {
    const [time,setTime]=useState(0);
    const handleInput=(event)=>{
        setTime(parseInt(event.target.value * 60))
    }

    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setSec(sec+1);

            if(sec==59){
                setMin(min+1);
                setSec(0);
            }
        },1000)

        return ()=>clearInterval(timer);
    });

    const restart=()=>{
        setSec(0);
        setMin(0);
    }

    const pause=()=>{
        clearInterval(timer);
    }

    
  return (
    <div id='timerbox'>
        <div id="timercon">
            <h1>Set Timer</h1>
            <input type='number' placeholder='Enter time in min' onChange={handleInput}></input>
            <h1>{min<10? '0'+min:min}:{sec<10? '0'+sec:sec}</h1>
            <button>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={restart}>Restart</button>
            
            
        </div>
    </div>
  )
}

export default Timer