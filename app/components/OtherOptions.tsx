import React from 'react'
import { ProductGrid } from '@/app/components'
import { useOtherVariations } from '../hooks/useOtherVariations'

const OtherOptions = () => {
  const products = useOtherVariations()
  return <ProductGrid products={products} />
}

export default OtherOptions
