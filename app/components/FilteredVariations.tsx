'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useVariations } from '@/app/hooks'
import { VariationAttributes } from '@/app/types'

export const FilteredVariations = ({
  filters,
}: {
  filters: Record<VariationAttributes, string> | null
}) => {
  const variations = useVariations(filters)
  return (
    <>
      <TitleBar>Results ({variations.length})</TitleBar>
      <ProductGrid type="product" items={variations} />
    </>
  )
}
