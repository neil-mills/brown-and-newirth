'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useProducts } from '@/app/hooks'
import { ProductAttributes } from '../types'

export const FilteredProducts = ({
  category,
  filters,
}: {
  category: string
  filters: Record<ProductAttributes, string> | null
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
