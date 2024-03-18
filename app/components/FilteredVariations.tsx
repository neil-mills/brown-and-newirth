'use client'
import { ProductGrid, TitleBar } from '@/app/components'
import { useStore, useVariations } from '@/app/hooks'
import { FilterLayerKeys, VariationFilters } from '@/app/types'

export const FilteredVariations = ({
  filters,
}: {
  filters: VariationFilters | null
}) => {
  const { filterLayers } = useStore((store) => store.selectedSku)
  const filterByAttribute: FilterLayerKeys =
    filterLayers[filterLayers.length - 1]
  const variations = useVariations({ filterByAttribute, filters })
  return (
    <>
      <TitleBar>Results ({variations.length})</TitleBar>
      <ProductGrid style="variation" items={variations} />
    </>
  )
}
