'use client'
import { useEffect } from 'react'
import { ProductDetails, OtherOptions, AltOptions } from '@/app/components'
import { useProduct, useStore } from '@/app/hooks'
import ResultsFilter from '@/app/components/ResultsFilter'
import ResultsTabs from '@/app/components/ResultsTabs'

interface Props {
  params: {
    sku: string
  }
}

const ProductDetailsPage = ({ params: { sku } }: Props) => {
  const setSelectedSku = useStore((store) => store.setSelectedSku)
  const { product, variations, images, isLoading, error } = useProduct(sku)

  useEffect(() => {
    setSelectedSku({ sku, product, variations, images })
  }, [setSelectedSku, product, variations, images, sku])

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  if (!product) return <p>No product found</p>

  return (
    <>
      <div className="col-left is-single h-100 d-flex flex-column">
        <ProductDetails />
      </div>
      <div className="col col-right h-100">
        <div className="row row-pad-sm align-items-center">
          <ResultsFilter />
          <ResultsTabs />
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="other"
            role="tabpanel"
            tabIndex={0}
          >
            <OtherOptions />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
