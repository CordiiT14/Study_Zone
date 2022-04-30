import React from 'react';

const Controls = ({isClockRunning, startTimer, pauseTimer, resetTimer}) => {

    const handleClick = (event) => {
        if (event.target.value === 'start'){
            startTimer();
        } else if (event.target.value === 'pause'){
            pauseTimer();
        }else {
            resetTimer();
        }
    }
    
    return(
        <div>
            {!isClockRunning ? <button value="start" onClick={handleClick}>
                Start
            </button>
            :
            <button value="pause" onClick={handleClick}>
                Pause
            </button>}
            <button value="reset" onClick={handleClick}>
                Reset
            </button>
        </div>
    )
}

export default Controls;