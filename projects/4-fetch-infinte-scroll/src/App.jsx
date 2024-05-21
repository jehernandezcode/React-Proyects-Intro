import { useEffect, useState } from "react"

import { getRamdomfactOfCat } from './services/facts'
import { API_IMG_CAT} from './constans/Apis'
import './app.css'


function useCatImgSize ({firstWord}) {
  const [sizeImg, setSizeImg] = useState()
  console.log(firstWord)
  useEffect(() => {
  if(!firstWord) return

    fetch(`${API_IMG_CAT}/${firstWord}?json=true`)
    .then(res => {
      if(!res.ok) throw new Error('Error Fetching img properties')
      return res.json()
    })
    .then(data => {
      const { size } = data
      setSizeImg(size)

    }).catch((err) => {
      console.error(err)
    })
  }, [firstWord])

return { sizeImg }
}

function useFactFirstsWord ({fact, nWords}) {
  const [firstWord, setFirstWord] = useState()

  useEffect(() => {
  if(!fact) return

  const firstWord = fact.split(' ', nWords).join(' ')
  setFirstWord(firstWord)
  }, [fact])

return { firstWord }
}


export function App() {

  const [fact, setfact] = useState()
  const { firstWord } = useFactFirstsWord({fact, nWords: 4})
  const { sizeImg } = useCatImgSize({firstWord})


  useEffect(() => {
    getRamdomfactOfCat().then((fact) => {
      setfact(fact)
    })
  }, [])


  const handleClick = async () => {
    const fact = await getRamdomfactOfCat()
    setfact(fact)
  }
  
  return (
    <main>
      <h1>Know Cats Facts</h1>
      <button onClick={handleClick}>Get new Cat</button>
      {fact && <p>{fact}</p>}
      {firstWord && <img src={`${API_IMG_CAT}/${firstWord}`}></img>}
      {sizeImg && <h4>Size Img: { Math.trunc(sizeImg / 1024)} Kb</h4>}
    </main>
  )
}

