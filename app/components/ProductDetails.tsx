'use client'
import { useStore } from '@/app/hooks'
import {
  VariationOptions,
  DataTable,
  AddToBasket,
  ImageCarousel,
  BackLink,
  DiamondCaratFilter,
  DiamondOriginFilter,
  GaugeFilter,
  WidthFilter,
} from '@/app/components'
import { useEffect, useState } from 'react'

export const ProductDetails = () => {
  const [showAddToBasket, setShowAddToBasket] = useState<boolean>(false)
  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
    product,
    sku,
    filterLayers,
  } = useStore((store) => store.selectedSku)

  console.log({ filterLayers })
  const showSize = !product?.attributes?.['pa_type-2']?.length

  useEffect(() => {
    const show = !showSize
      ? selectedMetal !== ''
      : selectedSize !== '' && selectedMetal !== ''
    setShowAddToBasket(show)
  }, [selectedSize, selectedMetal, showSize])

  if (!variations) return null

  return (
    <>
      <BackLink />
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <ImageCarousel />
        {!sku && (
          <>
            <p className="fw-300">Filter By:</p>
            {filterLayers.includes('pa_gauge') && <GaugeFilter />}
            {filterLayers.includes('pa_diamond') && <DiamondOriginFilter />}
            <hr />
            {filterLayers.includes('pa_width') && <WidthFilter />}
            {filterLayers.includes('pa_centre-carat') && (
              <DiamondCaratFilter attribute="pa_centre-carat" />
            )}
            {filterLayers.includes('pa_total-carat') && (
              <DiamondCaratFilter attribute="pa_total-carat" />
            )}
          </>
        )}
        {sku && (
          <>
            <DataTable />
            <VariationOptions showSize={showSize} />
            {showAddToBasket && <AddToBasket />}
          </>
        )}
      </div>
    </>
  )
}
