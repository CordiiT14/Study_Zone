import React from 'react';


const Controls = ({isClockRunning, timer}) => {

    const handleClick = (event) => {
        if (event.target.value === 'start'){
            timer(event.target.value);
        } else if (event.target.value === 'pause'){
            timer(event.target.value);
        }else {
            timer(event.target.value);
        }
    };

    

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