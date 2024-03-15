'use client'
import { useStore } from '@/app/hooks'
import {
  VariationOptions,
  DataTable,
  AddToBasket,
  ImageCarousel,
  BackLink,
  DiamondCentreCaratFilter,
  DiamondOriginFilter,
  GaugeFilter,
} from '@/app/components'
import { useEffect, useState } from 'react'
import WidthFilter from './WidthFilter'

export const ProductDetails = () => {
  const [showAddToBasket, setShowAddToBasket] = useState<boolean>(false)
  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
    product,
    sku,
  } = useStore((store) => store.selectedSku)

  const showSize = !product?.attributes?.['pa_type-2']?.length

  useEffect(() => {
    const show = !showSize
      ? selectedMetal !== ''
      : selectedSize !== '' && selectedMetal !== ''
    setShowAddToBasket(show)
  }, [selectedSize, selectedMetal, showSize])

  if (!variations) return null
  const isDiamond =
    product?.attributes?.pa_diamond && product?.attributes?.['pa_centre-carat']

  return (
    <>
      <BackLink />
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <ImageCarousel />
        {!sku && (
          <>
            <p className="fw-300">Filter By:</p>
            <GaugeFilter />
            {isDiamond && <DiamondOriginFilter />}
            <hr />
            <WidthFilter />
            {isDiamond && <DiamondCentreCaratFilter />}
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
