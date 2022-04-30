import React, {useState, useEffect} from 'react';
import DisplayClock from '../components/DisplayClock';
import Controls from '../components/Controls';

const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(5);
    const [isClockRunning, setIsClockRunning] = useState(false);

    let countdown;
    
    const runTimer = () => {
            countdown = setInterval(() => {
                stepDown();
                console.log('hi')
            }, 1000)
    }

    const stepDown = () => {
        let temp = workTime - 1
        setWorkTime(temp)
    }

    const startTimer = () => {
        runTimer();
        setIsClockRunning(true);
    }

    const pauseTimer = () => {
        clearInterval(runTimer);
        setIsClockRunning(false);
    }

    const resetTimer = () => {
        clearInterval(countdown)
        setWorkTime(1500);
        setIsClockRunning(false);
    }


    return(
        <div>
            <DisplayClock workTime={workTime} />
            <Controls isClockRunning={isClockRunning} startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer}/>
        </div>
    )
};

export default Pomodoro;