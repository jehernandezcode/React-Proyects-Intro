import { useEffect, useState } from "react"

export function useFactFirstsWord ({fact, nWords}) {
    const [firstWord, setFirstWord] = useState()
  
    useEffect(() => {
    if(!fact) return
  
    const firstWord = fact.split(' ', nWords).join(' ')
    setFirstWord(firstWord)
    }, [fact])
  
  return { firstWord }
  }