import React from 'react';

const Sessions = ({sessionToggle, workTime, breakTime}) => {

    const workTimeInMinutes = parseInt(workTime / 60 ) % 60;
    const breakTimeInMinutes = parseInt(breakTime / 60) % 60;

    return(
        <div id='session-toggle'>
                <div onClick={sessionToggle}>
                    <label>Work</label>
                    <input type="number" value={workTimeInMinutes} min={0} max={60}></input>
                </div>
                <div onClick={sessionToggle}>
                    <label>Break</label>
                    <input type="number" value={breakTimeInMinutes} min={0} max={60}></input>
                </div>
            </div>
    )
}

export default Sessions;