// import Icons from '../img/icons.svg';
import { useState, useEffect } from 'react';
import { IslamPray, QuranRehal } from './Icons';
export function Homepage() {
    const [hafiz, setHafiz] = useState(0);
    const [muslim, setMuslim] = useState(0);

    useEffect(() => {
        // Set up an interval to increment the number every 500ms (0.5 second)
        const interval = setInterval(() => {
        setHafiz((prevNumber) => {
            if (prevNumber < 200000000) {
                return prevNumber + 1; // Increment if below the limit
              } else {
                clearInterval(interval); // Stop the interval
                return prevNumber; // Return the current number without incrementing
            }      
        });
        setMuslim((prevNumber) => {
            if (prevNumber < 3000000000) {
                return prevNumber + 1; // Increment if below the limit
              } else {
                clearInterval(interval); // Stop the interval
                return prevNumber; // Return the current number without incrementing
            }      
        });
    }, .01);} , []);
    return (
        <div className='homepage'>
            <div className='homepage__static'>
                <IslamPray />
                <p className='homepage--text'>+ {muslim} Muslim</p>
            </div>
            <div className='homepage__static'>
                <QuranRehal />
                <p className='homepage--text'>+ {hafiz} Hafiz</p>
            </div>
        </div>
    );
}