import { useStore } from '@/app/hooks'
import {
  VariationOptions,
  DataTable,
  AddToBasket,
  ImageCarousel,
  BackLink,
  DiamondCentreCaratFilter,
  DiamondOriginFilter,
} from '@/app/components'

export const ProductDetails = () => {
  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
    sku,
  } = useStore((store) => store.selectedSku)
  if (!variations) return null
  return (
    <>
      <BackLink />
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <ImageCarousel />
        {!sku && (
          <>
            <p className="fw-300">Filter By:</p>
            <DiamondOriginFilter />
            <hr />
            <DiamondCentreCaratFilter />
          </>
        )}
        <DataTable />
        <VariationOptions />
        {selectedSize && selectedMetal && <AddToBasket />}
      </div>
    </>
  )
}
