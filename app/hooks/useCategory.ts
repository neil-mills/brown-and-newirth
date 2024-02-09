import { useCategories, useStore } from '@/app/hooks'
import { Product } from '@/app/types'

export const useCategory = () => {
  const { categoryProducts, isLoading, error } = useCategories()
  const selectedCategory = useStore((store) => store.productsQuery.category)
  let category: Product | null = null
  if (!isLoading && !error && categoryProducts) {
    category =
      categoryProducts.find(
        (categoryProduct) =>
          categoryProduct.category.toLowerCase() === selectedCategory
      ) || null
  }

  return { category, isLoading, error }
}
