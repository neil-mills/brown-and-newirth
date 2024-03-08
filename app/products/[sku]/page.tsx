'use client'
import { useEffect } from 'react'
import {
  ProductDetails,
  OtherOptions,
  ResultsFilter,
  ResultsTabs,
} from '@/app/components'
import { useProduct, useStore } from '@/app/hooks'
import { ProductFilters } from '@/app/types'

interface Props {
  params: {
    sku: string
  }
  searchParams: {
    diamondOrigin?: string
  }
}

const ProductDetailsPage = ({
  params: { sku },
  searchParams: { diamondOrigin = '' },
}: Props) => {
  const setSelectedSku = useStore((store) => store.setSelectedSku)
  const filters: ProductFilters = { diamondOrigin }
  const { product, variations, images, otherOptions, isLoading, error } =
    useProduct(sku, filters)

  useEffect(() => {
    setSelectedSku({ sku, product, variations, images, otherOptions })
  }, [setSelectedSku, product, variations, images, otherOptions, sku])

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
