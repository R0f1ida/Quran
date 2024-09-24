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
    const range = data.data.filter(surrah => surrah.number >= e.target.starting.value && surrah.number <= e.target.end.value);
    // console.log(range)
    const randomSurrah = range[getRandomNumber(0, range.length)];
    
    try {
        const Surrah = await fetch(`https://api.alquran.cloud/v1/surah/${randomSurrah.number}`)
        const randomSurrahData = await Surrah.json();
        const surrahVerses = randomSurrahData.data.ayahs;
        verse.innerHTML = surrahVerses[getRandomNumber(0, surrahVerses.length)].text;
        numVerses.innerHTML = getRandomNumber(3, surrahVerses.length > 10 ? 10 : surrahVerses.length - 3)
    } catch (error) {
        console.error(error)
    }
})
