import React, {useEffect} from 'react';


const DisplayClock = ({timeLeftInSession}) => {

// display current session timer

    const displayTimer = () => {

        let seconds = timeLeftInSession % 60;
        let minutes = parseInt(timeLeftInSession / 60 ) % 60;
        let hours = parseInt(timeLeftInSession / 3600);

        // return ()
        return (
            <>
            { timeLeftInSession >= 3600 ?
            `${addLeadingZeroes(hours)}:${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`:
            `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
            }
            </>
            )
    }

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }

    return(
        <div className='clock'>
        <h1>{displayTimer()}</h1>
        </div>
    )

}

export default DisplayClock;