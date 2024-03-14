'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useVariations } from '@/app/hooks'
import { Filters } from '@/app/types'

export const FilteredVariations = ({
  filters,
}: {
  filters: Filters | null
}) => {
  const variations = useVariations(filters)
  return (
    <>
      <TitleBar>Results ({variations.length})</TitleBar>
      <ProductGrid type="product" items={variations} />
    </>
  )
}
