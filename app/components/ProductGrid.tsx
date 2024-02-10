'use client'
import { Fragment } from 'react'
import { ProductCard } from '.'
import { Product } from '../types'
import CategoryCard from './CategoryCard'

interface Props {
  type: 'category' | 'product'
  products: Product[]
}
const ProductGrid = ({ type, products }: Props) => {
  return (
    <ul>
      {products.map((product) => (
        <Fragment key={product.productId}>
          {type === 'category' ? (
            <CategoryCard product={product} />
          ) : (
            <ProductCard product={product} />
          )}
        </Fragment>
      ))}
    </ul>
  )
}

export default ProductGrid
