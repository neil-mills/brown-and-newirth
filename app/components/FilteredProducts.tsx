'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useProducts } from '@/app/hooks'
import { Filters } from '../types'

export const FilteredProducts = ({
  category,
  filters,
}: {
  category: string
  filters: Filters | null
}) => {
  const { products, isLoading, error } = useProducts(category, filters)
  if (isLoading || error) return null
  return (
    <>
      <TitleBar>Results ({products.length})</TitleBar>
      <ProductGrid type="product" items={products} />
    </>
  )
}
