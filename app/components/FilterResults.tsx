'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useProducts } from '../hooks/useProducts'
import { Filters } from '@/app/types'

export const FilterResults = ({
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
      <TitleBar>Results ({filters ? products.length : '0'})</TitleBar>
      {filters && <ProductGrid type="product" items={products} />}
    </>
  )
}
