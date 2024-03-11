import { useStore } from '@/app/hooks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  VariationOptions,
  DataTable,
  AddToBasket,
  ImageCarousel,
  BackLink,
} from '@/app/components'
import CaratFilter from './CaratFilter'
import DiamondOriginFilter from './DiamondOriginFilter'

export const ProductDetails = () => {
  const router = useRouter()

  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
  } = useStore((store) => store.selectedSku)
  if (!variations) return null
  return (
    <>
      <BackLink />
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <DiamondOriginFilter />
        <CaratFilter />
        <ImageCarousel />
      </div>
      <DataTable />
      <VariationOptions />
      {selectedSize && selectedMetal && <AddToBasket />}
    </>
  )
}
