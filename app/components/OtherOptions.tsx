import React from 'react'
import { ProductGrid } from '@/app/components'
import { useOtherOptions } from '../hooks'

export const OtherOptions = () => {
  const products = useOtherOptions()
  return <ProductGrid type="product" items={products} />
}
