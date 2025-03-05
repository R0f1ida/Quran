import { useEffect, useState } from "react";
import { Verse } from "../components/Verse";
import { fetchAyah, fetchSurrah, getRandomNumber, randomVerse } from "../components/helper";
import { Answer } from "../components/Answer";


export function Memo() {
  const [sowar, setSowar] = useState([]);
  const [startValue, setStart] = useState(1);
  const [endValue, setEnd] = useState(1);
  const [range, setRange] = useState([]);
  const [randomAyah, setAyah] = useState('');
  const [isHidden, setHidden] = useState(true);
  const [randomLimit, setLimit] = useState(2);
  const [randomFinishVerse, setVerse] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSowar = await fetchSurrah();
      setSowar(fetchedSowar);
      console.log(sowar);
      
    }
    fetchData();
  },[]); // Added dependency array    setSowar(await fetchSurrah());

  useEffect(() => {
    if (sowar.length > 0) {
      const filteredS = sowar.filter(s => s.number >= startValue && s.number <= endValue);
      setRange(filteredS);
    }
  }, [sowar, startValue, endValue]);  


  function showAnswer() {
    console.log(range);
    setVisible(!isVisible);
  }
    
  async function  submitChoice(e) {
    e.preventDefault();      
    try {
      // debugger;
      const fetchedSowar = await fetchSurrah();
      setSowar(fetchedSowar);
      const filteredS = sowar.filter(s => s.number >= startValue && s.number <= endValue);
      console.log("Filtered Sowar:", filteredS); // Log filtered data
      setRange(filteredS);
      console.log("Range:", range); // Log range
      const numberOfVerse = range.map(s => s.numberOfAyahs);
      const randomIndex = getRandomNumber(0, numberOfVerse.length - 1);
      console.log("Random Index:", randomIndex); // Log random index
      
      const chosenSurrah = range[randomIndex];
      console.log("Chosen Surrah:", chosenSurrah); // Log chosen surrah
      // const chosenSurrahVerses = chosenSurrah.numberOfAyahs;
      console.log("Number of Verse:", numberOfVerse); // Log number of verse
      const totalVerses = numberOfVerse.reduce((acc, cur) => acc + cur);
      let remindedVerses;
      console.log("Total Verses:", totalVerses); // Log total verses
      fetchAyah(chosenSurrah.number).then((data) => {
        console.log(data);
        const startingAyah = data[getRandomNumber(1, data.length - 1)];
        const similarAyah = data.filter(a => a.text === startingAyah.text);
        console.log("Similar Ayah:", similarAyah); // Log similar verse
        
        const startingAyahIndex = data.findIndex(a => a.text === startingAyah.text);
        if(similarAyah.length > 1) {
          setAyah(`${startingAyah.text} (${startingAyah.numberInSurah}) ${data[startingAyahIndex + 1].text} (${data[startingAyahIndex + 1].numberInSurah})`);
        }
        console.log("Starting Ayah:", startingAyah); // Log starting verse
        setAyah(`${startingAyah.text} (${startingAyah.numberInSurah})`);
        let surrahVerses = data.length - 1;
        remindedVerses = surrahVerses - startingAyahIndex;
        console.log("Surrah Verses:", surrahVerses); // Log surrah verses
        console.log("Reminded Verses:", remindedVerses); // Log reminded verses
        let randomLimit = getRandomNumber(remindedVerses === surrahVerses ? 1 : 2, remindedVerses > 50 ? 50 : remindedVerses) 
        setLimit(randomLimit); 
        console.log("Random Limit:", randomLimit); // Log random limit
        const endingAyah = data[startingAyahIndex + randomLimit];
        console.log("Ending Ayah:", endingAyah); // Log ending verse
        setVerse(`${endingAyah.text} (${endingAyah.numberInSurah})`); 
        const answer = data.slice(startingAyahIndex + 1, startingAyahIndex + randomLimit + 1);
        setAnswers(answer);
        console.log("Answer:", answer); // Log answer       
      }).catch(error => console.error(error));
      fetchSurrah();
      console.log("Reminded Verses:", remindedVerses); // Log reminded verses
      console.log("Random Ayah:", randomAyah); // Log random verse
      console.log('startValue:', startValue);
      console.log('endValue:', endValue);
      
      
      setHidden(false);
    } catch (error) {
      console.error(error)
    }
  };
  function handelStartChange (event) {
    setStart(event.target.value);
  };
//`https://api.alquran.cloud/v1/surah/${surrah.number}`
  function handelEndChange (event) {
    setEnd(event.target.value);
  };
  return (
    <div className="content">
      <Answer opacity={isVisible ? 1 : 0} answers={answers.map(a => `${a.text} ${a.numberInSurah}`).join(' ')}/>
      <button className="show-answer" onClick={showAnswer}>Show Answer</button>
      <form className="form">
        <label htmlFor="starting" className="form__label">From</label>
        <select name="starting" id="starting" className="form__select" value={startValue} onChange={handelStartChange}>
          {
            sowar.map(s => <option value={s.number}>{s.name}</option>
          )} {/* Render the fetched options here */}
        </select>
        <label htmlFor="end">To:</label>         
        <select name="end" id="end" className="form__select" value={endValue} onChange={handelEndChange}>
          {
            sowar.map(s => <option value={s.number}>{s.name}</option>
          )} 
        </select>
        <button type='button' className="form__btn" onClick={submitChoice}>Start</button>
      </form>
      <Verse
        opacity={isHidden ? 0 : 1}
        num={randomLimit}
        start={randomAyah}
        end={randomFinishVerse}
      />
    </div>
  );
}

