import React, {useState, useEffect} from 'react';
import DisplayClock from '../components/DisplayClock';
import Controls from '../components/Controls';
import Sessions from '../components/Sessions';
import './pomodoro-timer.css';
import useSound from 'use-sound';
import ding from '../sound/ding-idea-40142.mp3';


const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [timeLeftInSession, setTimeLeftInSession] = useState()
    const [session, setSession] = useState('work');
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [intervalID, setIntervalID ] = useState(null)

    //set up timer sound
    const [play, {stop}] = useSound(ding);


    //updating timer display on change of session or session times
    useEffect(() => {
        setTime()
    },[session, workTime, breakTime])

    const setTime = () => {
        if(session === 'work'){
            setTimeLeftInSession(workTime)
        } else if (session === 'break'){
            setTimeLeftInSession(breakTime)
        }
    };

    function timer(action) {
        if (action === "start"){
            setIsClockRunning(true);
            let tempID = setInterval(stepDown , 1000);
            setIntervalID(tempID)
        } else if (action === "pause"){
            clearInterval(intervalID);
            setIsClockRunning(false);
        } else {
            setIsClockRunning(false);
            clearInterval(intervalID);
            setTime();
        }
    };

    let time = timeLeftInSession;

    function stepDown() {
        
        if(time > 0 ) {
            time--
            setTimeLeftInSession(time);
        } else if (time == 0){
            playTimerOverSound();
        }
        else {
            setIsClockRunning(false);
            timer('pause');
        }
    };

//switches timer from work session and break session
    const sessionToggle = (event) => {
        setSession(event.target.ariaLabel);
    }

// play sound when timer runs out (Music from Pixabay)
    const playTimerOverSound = () => {
    
        play();
        setTimeout(()=> {
            stop();
        }, 3000)
    };


    return(
        <>
        <div id="pomodoro-clock-container">
            <Sessions isClockRunning={isClockRunning} sessionToggle={sessionToggle} workTime={workTime} setWorkTime={setWorkTime} breakTime={breakTime} setBreakTime={setBreakTime}/>
            <DisplayClock timeLeftInSession={timeLeftInSession} />
            <Controls isClockRunning={isClockRunning} timer={timer}/>
        </div>

           

        </>
    )
};

export default Pomodoro;