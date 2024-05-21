import { useEffect, useState } from "react"

import { API_IMG_CAT} from '../constans/Apis'

export function useCatImgSize ({firstWord}) {
    const [sizeImg, setSizeImg] = useState()
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