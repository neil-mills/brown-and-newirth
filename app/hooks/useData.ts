import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Product } from '../types'

export const useData = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get<Product[]>(
          'https://www.brownandnewirth.com/wp-json/productData/v1/data'
        )
        .then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  })
}
