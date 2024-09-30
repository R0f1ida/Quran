let data;
const starting = document.querySelector('#starting');
const ending = document.querySelector('#end');
const verse = document.querySelector('#verse')
const numVerses = document.querySelector('#num');
function getRandomNumber(min, max) {
    // console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
try {
    const result = await fetch("https://api.alquran.cloud/v1/surah");
    data = await result.json();
    console.log(data);
} catch (error) {
    console.error(error)   
}

starting.innerHTML = `${
    await data.data.map(surrah => {
        return `<option value="${surrah.number}">${surrah.name}</option>`
    })
}`
ending.innerHTML = `${
    await data.data.map(surrah => {
        return `<option value="${surrah.number}">${surrah.name}</option>`
    })
}`

document.querySelector('form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    
    numVerses.innerHTML = '';
    const range = data.data.filter(surrah => surrah.number >= e.target.starting.value && surrah.number <= e.target.end.value);
    const randomSurrah = range[getRandomNumber(0, range.length - 1)];
    getVerse(randomSurrah)
    document.querySelector(".show-answer").addEventListener('click', (e)=>{
        if(document.querySelector('.answer').style.opacity == 0) {
            document.querySelector('.answer').style.opacity = 1;
            e.target.innerText = 'Hide answer'
        }else {
            document.querySelector('.answer').style.opacity = 0;
            e.target.innerText = 'Show Answer';
        }
    })

})


const  getVerse = async function(surrah) {
    try {
        const Surrah = await fetch(`https://api.alquran.cloud/v1/surah/${surrah.number}`)
        const randomSurrahData = await Surrah.json();
        const surrahVerses = randomSurrahData.data.ayahs;
        const versesCopy = [...surrahVerses]
        const randomVerse = versesCopy[getRandomNumber(0, versesCopy.length - 2)];
        const verseIndex = surrahVerses.findIndex(verse => verse.text == randomVerse.text)
        const numberOfVerses = getRandomNumber(5, (versesCopy.length-1 - verseIndex) < 50 ? versesCopy.length-1 - verseIndex : 50)
        let answer = versesCopy.filter(v => v.number >= randomVerse.number);
        answer = answer.slice(0, numberOfVerses);
        console.log(answer)
        verse.innerHTML = `${randomVerse.text} ${randomVerse.numberInSurah}`;
        numVerses.innerHTML += `recite ${numberOfVerses} Verses after:`
        document.querySelector('.answer').innerHTML =`${answer.map(v => v.text + v.numberInSurah).join(' ')}`
    } catch (error) { 
        console.error(error)
    }
}