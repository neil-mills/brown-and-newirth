'use client'
import { useStore } from '@/app/hooks'

interface Props {
  params: { category: string }
}
const ProductCategoryPage = ({ params: { category } }: Props) => {
  return (
    <>
      <h1>{category.toUpperCase()} RINGS</h1>
    </>
  )
}

export default ProductCategoryPage
