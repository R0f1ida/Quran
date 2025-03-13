import { useEffect, useState } from "react";
import { fetchAyah, fetchSurrah } from "../components/helper";

export function Quran() {
    const [sowar, setSowar] = useState([]);
    // const [surrah, setSurrah] = useState([]);
    const getSurrah = async (e) => {
        // setSurrah(fetchedSurrah);
        if(e.target.classList.contains('sowar--item')) {
            let surrahNumber = e.target.querySelector('.sowar--number');
            const fetchedSurrah = await fetchAyah(surrahNumber);
            console.log(fetchedSurrah);

        }else{
            console.log(e.target);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
        const fetchedSowar = await fetchSurrah();
        setSowar(fetchedSowar);
        console.log(sowar); 
        }
        fetchData();
    }, [sowar]);
    return (
        <div>
            <div>
                <h1>Quran</h1>
            </div>
            <ul className='sowar'>
                {sowar.map(s=> 
                    <li className="sowar--item" onClick={getSurrah}>
                        <span className="sowar--number">{s.number}</span>
                        <div className="sowar--name">{s.englishName}</div>
                        <div className="sowar--arab">{s.name}</div>    
                    </li> )}
            </ul>
        </div>
        );
}