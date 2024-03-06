import React from 'react'
import { ProductGrid } from '@/app/components'
import { useOtherVariations } from '../hooks/useOtherVariations'

export const OtherOptions = () => {
  const products = useOtherVariations()
  return <ProductGrid type="product" items={products} />
}
