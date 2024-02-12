import Link from 'next/link'
import { Product, Variation } from '../types'

const isProduct = (item: Product | Variation): item is Product => {
  return (item as Product).productId !== undefined
}

export const ProductCard = ({ item }: { item: Product | Variation }) => {
  // const url = isProduct(item) ? `/products/${item.productId}`: `/products/category/${item.}`
  // return (
  //   <li>
  //     <Link href={`/products/${product.productId}`}>{product.name}</Link>
  //   </li>
  // )
}
