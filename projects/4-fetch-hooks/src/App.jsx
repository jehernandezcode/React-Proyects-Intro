import { API_IMG_CAT} from './constans/Apis'
import { useCatImgSize } from './hooks/useCatImgSize'
import { useFactFirstsWord } from './hooks/useFactFirstsWord'
import { useCatFact } from './hooks/useCatFact'
import './app.css'


export function App() {

  const { fact, refreshFact} = useCatFact()
  const { firstWord } = useFactFirstsWord({fact, nWords: 4})
  const { sizeImg } = useCatImgSize({firstWord})


  const handleClick = async () => {localStorage
    refreshFact()
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

