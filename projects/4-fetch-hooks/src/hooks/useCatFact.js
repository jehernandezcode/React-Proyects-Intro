import { useEffect, useState } from "react"
import { getRamdomfactOfCat } from '../services/facts'

export const useCatFact = () => {
    const [fact, setfact] = useState()
  
    const refreshFact = () => {
      getRamdomfactOfCat().then(newFact => setfact(newFact))
    }
    useEffect(refreshFact, [])
    return {fact, refreshFact}
  }