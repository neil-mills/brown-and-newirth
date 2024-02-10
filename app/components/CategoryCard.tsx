import Link from 'next/link'
import { Product } from '../types'

const CategoryCard = ({ product }: { product: Product }) => {
  return (
    <li>
      <Link href={`/products/category/${product.category.toLowerCase()}`}>
        {product.category}
      </Link>
    </li>
  )
}

export default CategoryCard
