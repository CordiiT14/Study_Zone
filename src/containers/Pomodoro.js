import React, {useState} from 'react';
import DisplayClock from '../components/DisplayClock';
import Controls from '../components/Controls';

const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [isClockRunning, setIsClockRunning] = useState(false);
    
    const runTimer = () => {
        if (isClockRunning === true){
            if (workTime > 0){
                let temp = workTime--
                setWorkTime(temp)
            } else {
                setIsClockRunning(false)
            }
        }
    }


    return(
        <div>
            <DisplayClock workTime={workTime} />
            <Controls />
        </div>
    )
};

export default Pomodoro;