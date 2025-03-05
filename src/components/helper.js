export let randomVerse;

export function getRandomNumber(min, max) {
    // console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function fetchAyah(number) {
    try {
        const surrah = await fetch(`https://api.alquran.cloud/v1/surah/${number}`)
        const randomAyahData = await surrah.json();
        randomVerse = randomAyahData.data.ayahs;
        return randomVerse;
    } catch (error) {
        console.error(error)
    }
}

export const fetchSurrah = async () => {
    try {
      const response = await fetch("https://api.alquran.cloud/v1/surah")
      const data = await response.json()
      console.log(data);
      const result = data.data.map(s => {
        return {
          ...s,
          key: s.number
        }
      })
      return result;
    } catch (error) {
      console.error(error);
      
    }
  };