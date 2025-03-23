import { useEffect, useState } from "react";
import { fetchAyah, fetchSurrah } from "../components/helper";
// import AudioPlayer from "../components/AudioPlayer";

export function Quran() {
    const [sowar, setSowar] = useState([]);
    const [surrah, setSurrah] = useState([]);
    // const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        const fetchedSowar = await fetchSurrah();
        setSowar(fetchedSowar);
        // console.log(sowar); 
        }
        fetchData();
    }, [sowar]);

    
    const getSurrah = async (e) => {
        // setSurrah(fetchedSurrah);
        // setIsVisible(true);
        if(e.target.classList.contains('quran__sowar--item')) {
            const surrahNumber = e.target.querySelector('.quran__sowar--number');
            if (surrahNumber){
                const fetchedSurrah = await fetchAyah(surrahNumber.textContent);
                setSurrah(fetchedSurrah);
                console.log(surrah);
            }

        }else {
            const surrahNumber = e.target.parentElement.querySelector('.quran__sowar--number');
            if (surrahNumber){
                const fetchedSurrah = await fetchAyah(surrahNumber.textContent);
                setSurrah(fetchedSurrah);
                console.log(surrah);
            }
           

        }    
    }


    return (
        <div className="quran">
            <a href="#sowar" className="quran__link">go to index &darr;</a>
            
            <div className="quran__surrah">
                {/* <button className="quran__surrah--prev">prev</button>
                <button className="quran__surrah--next">next</button>
                 */}
                {/* <audio src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/2.mp3" controls></audio>
                <audio src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/2.mp3" controls></audio>
                <audio src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/3.mp3" controls></audio>
                <audio src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/4.mp3" controls></audio>
                <audio src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/5.mp3" controls></audio> */}
                
                <div>
                    {/* {isVisible && <AudioPlayer audioList={[0, 1, 2]} />} */}
                    {surrah.map(ayah => `${ayah.text} ${ayah.numberInSurah}`).join(' ')}
                </div>    
            </div>
            <ul className='quran__sowar' id="sowar">
                {sowar.map(s=> 
                    <li className="quran__sowar--item" onClick={getSurrah}>
                        <span className="quran__sowar--number">{s.number}</span>
                        <div className="quran__sowar--name">{s.englishName}</div>
                        <div className="quran__sowar--arab">{s.name}</div>    
                    </li> )}
            </ul>
        </div>
        );
}