import React from 'react';

const DisplayClock = ({workTime}) => {

    const displayTimer = () => {
        let workTimeInSeconds = workTime * 60;
        let seconds = (workTimeInSeconds % 3600) % 60;
        let minutes = parseInt(workTimeInSeconds % 3600) / 60;
        let hours = parseInt(workTimeInSeconds / 3600);

        console.log(seconds, minutes, hours)

        return (`${addLeadingZeroes(hours)}:${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`)
    }

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }

    return(
        <div>
        {displayTimer()}
        </div>
    )

}

export default DisplayClock;