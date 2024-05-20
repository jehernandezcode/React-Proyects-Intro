import { API_IMG_CAT, API_FACT_CAT} from '../constans/Apis'


export const getRamdomfactOfCat = async () => {
    const res = await fetch(API_FACT_CAT)
      if(!res.ok) throw new Error('Error Fetching fact')
    const data = await res.json()
    const { fact } = data
    return fact;
  }
