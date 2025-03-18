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
            if (prevNumber < 2000000000) {
                return prevNumber + 1; // Increment if below the limit
              } else {
                clearInterval(interval); // Stop the interval
                return prevNumber; // Return the current number without incrementing
            }      
        });
    }, .01);} , []);
    return (
        <div className='homepage'>
            <p className='homepage--verse'>وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ</p>
            <div className='homepage__static'>
                <div className='homepage--text'>
                    <IslamPray />
                    <p className='homepage--number'>+ {muslim} Muslim</p>
                </div>
                <div className='homepage--text'>
                    <QuranRehal />
                    <p className='homepage--number'>+ {hafiz} Hafiz</p>
                </div>
            </div>

        </div>
    );
}