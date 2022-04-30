import React, {useState, useEffect} from 'react';
import DisplayClock from '../components/DisplayClock';
import Controls from '../components/Controls';

const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(150);
    const [breakTime, setBreakTime] = useState(5);
    const [isClockRunning, setIsClockRunning] = useState(false);

    // useEffect(() => {
    //     runTimer()
    // },[])

    let timeLeftInSession = workTime;
  
    // var countdown;
    

    function timer(action) {
        let countdown;
        if (action === "start"){
            countdown = setInterval(stepDown, 1000);
        } else if (action === "pause"){
            clearInterval(countdown)
        } else {
            clearInterval(countdown)
        }
    }


    function stepDown() {

        if(timeLeftInSession > 0 ) {
            timeLeftInSession--
            setWorkTime(timeLeftInSession);
        } else {
            setIsClockRunning(false);
        }
    }



    // const startTimer = () => {
    //     setIsClockRunning(true);
    //     runTimer();  
    // }

    // const pauseTimer = () => {

    //     setIsClockRunning(false);
    // }

    // const resetTimer = () => {

    //     setWorkTime(1500);
    //     setIsClockRunning(false);

    // }


    return(
        <div>
            <DisplayClock workTime={workTime} />
            {/* <Controls isClockRunning={isClockRunning} startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer}/> */}
            <Controls isClockRunning={isClockRunning} timer={timer}/>
        </div>
    )
};

export default Pomodoro;