import { useStore } from '@/app/hooks'
import { VariationOptions } from '@/app/components'
import Link from 'next/link'
import DataTable from './DataTable'
import AddToBasket from './AddToBasket'
import ImageCarousel from './ImageCarousel'
import { useRouter } from 'next/navigation'
import BackLink from './BackLink'

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
        <ImageCarousel />
      </div>
      <DataTable />
      <VariationOptions />
      {selectedSize && selectedMetal && <AddToBasket />}
    </>
  )
}
