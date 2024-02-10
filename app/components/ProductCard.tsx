import Link from 'next/link'
import { Product } from '../types'

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li>
      <Link href={`/products/${product.productId}`}>{product.name}</Link>
    </li>
  )
}
