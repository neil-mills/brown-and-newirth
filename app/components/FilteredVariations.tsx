'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useVariations } from '@/app/hooks'
import { VariationFilters } from '@/app/types'

export const FilteredVariations = ({
  filters,
}: {
  filters: Record<string, string> | null
}) => {
  const variations = useVariations(filters)
  return (
    <>
      <TitleBar>Results ({variations.length})</TitleBar>
      <ProductGrid type="product" items={variations} />
    </>
  )
}
