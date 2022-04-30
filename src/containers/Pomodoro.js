import React, {useState, useEffect} from 'react';
import DisplayClock from '../components/DisplayClock';
import Controls from '../components/Controls';

const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(150);
    const [breakTime, setBreakTime] = useState(5);
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [intervalID, setIntervalID ] = useState(null)

    // useEffect(() => {
    //     runTimer()
    // },[])

    let timeLeftInSession = workTime;
    

    function timer(action) {
        if (action === "start"){
            let tempID = setInterval(stepDown, 1000);
            setIntervalID(tempID)
        } else if (action === "pause"){
            clearInterval(intervalID)
        } else {
            clearInterval(intervalID)
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




    return(
        <div>
            <DisplayClock workTime={workTime} />
            <Controls isClockRunning={isClockRunning} timer={timer}/>
        </div>
    )
};

export default Pomodoro;