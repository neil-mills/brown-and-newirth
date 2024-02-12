'use client'

import { Product } from '@/app/components'
import { useProduct, useStore } from '@/app/hooks'

interface Props {
  params: {
    slug: string[]
  }
}

const ProductDetailsPage = ({ params: { slug } }: Props) => {
  const [productId, _variation, variationId] = slug
  const setProduct = useStore((store) => store.setProduct)
  const setVariation = useStore((store) => store.setVariation)
  const { product, variation, isLoading, error } = useProduct(
    productId,
    variationId
  )
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  if (!product) return <p>No product found</p>
  setProduct(product)
  setVariation(variation)
  return (
    <>
      <h1>{product.name}</h1>
      <Product />
      <OtherOptions />
      <AltOptions />
      <div></div>
    </>
  )
}

export default ProductDetailsPage
