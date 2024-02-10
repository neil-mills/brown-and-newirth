'use client'

import { Select } from '@/app/components/Select'
import { useProduct, useStore, useVariations } from '@/app/hooks'

interface Props {
  params: {
    slug: string[]
  }
}

const ProductDetailsPage = ({ params: { slug } }: Props) => {
  const [productId, _variation, variationId] = slug
  const setProductId = useStore((store) => store.setProductId)
  const setVariationId = useStore((store) => store.setVariationId)
  const { product, isLoading, error } = useProduct(productId, variationId)

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  if (!product) return <p>No product found</p>
  return (
    <>
      <h1>{product.name}</h1>
      <div>
        <Select value={} options={} />
      </div>
    </>
  )
}

export default ProductDetailsPage
