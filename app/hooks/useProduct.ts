import { Product } from '../types'
import { useStore, useGetData } from './'

interface Response {
  isLoading: boolean
  error: Error | null
  product: Product | null
}

export const useProduct = (): Response => {
  const selectedProductId = useStore((store) => store.productId)
  let product: Product | null = null
  const { data, error, isLoading } = useGetData()
  if (!error && !isLoading && data) {
    product = data.find((p) => p.productId === selectedProductId) || null
  }
  return { isLoading, error, product }
}
