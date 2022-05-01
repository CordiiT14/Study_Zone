import React from 'react';

const Sessions = ({sessionToggle, session,   workTime, setWorkTime, breakTime, setBreakTime}) => {

    const workTimeInMinutes = parseInt(workTime / 60 ) % 60;
    const breakTimeInMinutes = parseInt(breakTime / 60) % 60;

    const setNewWorkTime = (event) => {
        const timeInMinutes = event.target.value
        const timeInSeconds = timeInMinutes * 60;
        setWorkTime(timeInSeconds);
    }

    const setNewBreakTime = (event) => {
        const timeInMinutes = event.target.value
        const timeInSeconds = timeInMinutes * 60;
        setBreakTime(timeInSeconds);
    }

    

    return(
        <div id='session-toggle'>
                <div className="work" >
                    <label>Work</label>
                    <input type="number" onClick={sessionToggle} onChange={setNewWorkTime} defaultValue={workTimeInMinutes} min={0} max={60} aria-label="work"></input>
                </div>
                <div className="break" >
                    <label>Break</label>
                    <input type="number" onClick={sessionToggle} onChange={setNewBreakTime} defaultValue={breakTimeInMinutes} min={0} max={60} aria-label="break"></input>
                </div>
            </div>
    )
}

export default Sessions;