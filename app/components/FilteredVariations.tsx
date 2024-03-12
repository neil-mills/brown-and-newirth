'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useVariations } from '@/app/hooks'
import { VariationFilters } from '@/app/types'

export const FilteredVariations = ({
  filters,
}: {
  filters: VariationFilters | null
}) => {
  console.log({ filters })
  const variations = useVariations(filters)
  return (
    <>
      <TitleBar>Results ({variations.length})</TitleBar>
      <ProductGrid type="product" items={variations} />
    </>
  )
}
