'use client'
import { useEffect } from 'react'
import {
  ProductDetails,
  OtherOptions,
  ResultsFilter,
  ResultsTabs,
  FilteredVariations,
} from '@/app/components'
import { useProduct, useStore, useFilterSearchParams } from '@/app/hooks'
import { VariationFilters } from '@/app/types'

interface Props {
  params: {
    slug: string[]
  }
  searchParams: VariationFilters
}

const ProductDetailsPage = ({ params: { slug }, searchParams }: Props) => {
  const [idParam, id] = slug
  const productId = idParam === 'productId' ? id : null
  const sku = idParam === 'sku' ? id : null
  const setSelectedSku = useStore((store) => store.setSelectedSku)
  const filters = useFilterSearchParams(searchParams)
  const { product, variations, images, otherOptions, isLoading, error } =
    useProduct({ productId, sku })
  useEffect(() => {
    setSelectedSku({
      sku,
      product,
      variations,
      images,
      otherOptions,
      diamondOrigin: searchParams?.pa_diamond,
      centreCarat: searchParams?.['pa_centre-carat'],
    })
  }, [
    setSelectedSku,
    product,
    variations,
    images,
    otherOptions,
    sku,
    searchParams,
  ])

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  if (!product) return <p>No product found</p>

  return (
    <>
      <div className="col-left is-single h-100 d-flex flex-column">
        <ProductDetails />
      </div>
      <div className="col col-right h-100">
        {sku && (
          <>
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
          </>
        )}
        {productId && <FilteredVariations filters={filters} />}
      </div>
    </>
  )
}

export default ProductDetailsPage
