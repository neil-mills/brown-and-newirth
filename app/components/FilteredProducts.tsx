'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useProducts } from '@/app/hooks'
import { Filters, Styles } from '@/app/types'

export const FilteredProducts = ({
  category,
  filters,
}: {
  category: Styles
  filters: Filters | null
}) => {
  const { products, isLoading, error } = useProducts(category, filters)
  if (isLoading || error) return null
  return (
    <>
      <TitleBar>Results ({products.length})</TitleBar>
      <ProductGrid type="product" style="product" items={products} />
    </>
  )
}
