'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useProducts } from '@/app/hooks'

export const FilteredProducts = ({
  category,
  filters,
}: {
  category: string
  filters: Record<string, string> | null
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
