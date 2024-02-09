'use client'
import Link from 'next/link'
import { Product } from '../types'
import { useCategories } from '@/app/hooks'

const ProductGrid = () => {
  const { categoryProducts: products, isLoading, error } = useCategories()
  if (isLoading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  console.log({ products })
  return (
    <>
      <h3>Categories</h3>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <Link href={`/products/${product.productId}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductGrid
