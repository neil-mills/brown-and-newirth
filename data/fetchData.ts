import axios from 'axios'
import { Product } from '@/app/types'

const fetchData = async () => {
  const res = await axios.get<Product[]>(
    'https://www.brownandnewirth.com/wp-json/productData/v1/data'
  )
  return res.data
}

export default fetchData
