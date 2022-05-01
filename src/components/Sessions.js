import React from 'react';

const Sessions = ({sessionToggle}) => {


    return(
        <div id='session-toggle'>
                <div onClick={sessionToggle}>
                    <label>Work</label>
                    <input type="number" ></input>
                </div>
                <div onClick={sessionToggle}>Short Break</div>
                <div onClick={sessionToggle}>Long Break</div>
            </div>
    )
}

export default Sessions;