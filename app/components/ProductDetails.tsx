import { useStore } from '@/app/hooks'
import { VariationOptions } from '@/app/components'
import Link from 'next/link'
import DataTable from './DataTable'
import AddToBasket from './AddToBasket'
import ImageCarousel from './ImageCarousel'

export const ProductDetails = () => {
  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
  } = useStore((store) => store.selectedSku)
  if (!variations) return null
  return (
    <>
      <Link
        href="#"
        className="mb-2 fw-300"
      >{`< Link Return To Previous`}</Link>
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <ImageCarousel />
      </div>
      <DataTable />
      <VariationOptions />
      {selectedSize && selectedMetal && <AddToBasket />}
    </>
  )
}
