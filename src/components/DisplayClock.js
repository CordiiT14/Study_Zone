import React, {useEffect} from 'react';

const DisplayClock = ({workTime}) => {



    const displayTimer = () => {

        let seconds = workTime % 60;
        let minutes = parseInt(workTime / 60 ) % 60;
        let hours = parseInt(workTime / 3600);

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