import { useEffect, useState } from "react";
import { fetchSurrah } from "../components/helper";

export function Quran() {
    const [sowar, setSowar] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const fetchedSowar = await fetchSurrah();
        setSowar(fetchedSowar);
        console.log(sowar); 
        }
        fetchData();
    }, []);
    return (
        <div>
            <ul className='sowar'>
                {sowar.map(s=> 
                    <li className="sowar--item">
                        <span className="sowar--number">{s.number}</span>
                        <div className="sowar--name">{s.englishName}</div>
                        <div className="sowar--arab">{s.name}</div>    
                    </li> )}
            </ul>
        </div>
        );
}