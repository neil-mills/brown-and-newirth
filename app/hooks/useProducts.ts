import { Product } from '../types'
import { useStore, useGetData } from './'

export const useProducts = () => {
  let products: Product[] = []
  const { data, error, isLoading } = useGetData()
  const search = useStore((store) => store.productsQuery.search)
  const selectedCategoryId = useStore((store) => store.productsQuery.category)
  const selectedSku = useStore((store) => store.productsQuery.sku)

  if (!isLoading && !error && data) {
    products = data
    if (search) {
      products = products?.filter(
        (product) =>
          product.name.includes(search) || product.sku.includes(search)
      )
    } else {
      if (selectedCategoryId) {
        products = products.filter(
          (product) => (product.category = selectedCategoryId)
        )
      }
      if (selectedSku) {
        products = products.filter((product) => product.sku === selectedSku)
      }
    }
  }
  return { products, error, isLoading }
}
