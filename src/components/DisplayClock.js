import React, {useEffect} from 'react';

const DisplayClock = ({timeLeftInSession}) => {

// display current session timer

    const displayTimer = () => {

        let seconds = timeLeftInSession % 60;
        let minutes = parseInt(timeLeftInSession / 60 ) % 60;
        let hours = parseInt(timeLeftInSession / 3600);

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