import { useStore } from '@/app/hooks'
import { VariationOptions } from '@/app/components'
import Link from 'next/link'
import DataTable from './DataTable'
import AddToBasket from './AddToBasket'
import ImageCarousel from './ImageCarousel'
import { useRouter } from 'next/navigation'

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
      <Link
        href="#"
        onClick={() => router.back()}
        className="mb-2 fw-300"
      >{`< Return To Previous`}</Link>
      <div className="col-left-inner d-flex flex-column justify-content-between has-border">
        <ImageCarousel />
      </div>
      <DataTable />
      <VariationOptions />
      {selectedSize && selectedMetal && <AddToBasket />}
    </>
  )
}
