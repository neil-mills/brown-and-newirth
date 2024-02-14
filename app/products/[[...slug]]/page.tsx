'use client'
import { useEffect } from 'react'
import { ProductDetails, OtherOptions, AltOptions } from '@/app/components'
import { useProduct, useStore } from '@/app/hooks'

interface Props {
  params: {
    slug: string[]
  }
}

const ProductDetailsPage = ({ params: { slug } }: Props) => {
  const [productId, _variation, variationId] = slug
  const setSelectedItem = useStore((store) => store.setSelectedItem)
  const { product, variation, primaryAttr, isLoading, error } = useProduct(
    productId,
    variationId
  )

  useEffect(() => {
    setSelectedItem({ product, variation, primaryAttr })
  }, [setSelectedItem, product, variation, primaryAttr])

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  if (!product) return <p>No product found</p>

  return (
    <>
      <h1>{product.name}</h1>
      <ProductDetails />
      <OtherOptions />
      <AltOptions />
    </>
  )
}

export default ProductDetailsPage
