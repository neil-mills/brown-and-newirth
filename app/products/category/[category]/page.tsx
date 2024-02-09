'use client'
import { useStore } from '@/app/hooks'

interface Props {
  params: { category: string }
}
const ProductCategoryPage = ({ params: { category } }: Props) => {
  const setCategory = useStore((store) => store.setCategory)
  setCategory(category)
  return (
    <>
      <h1>{category.toUpperCase()}</h1>
    </>
  )
}

export default ProductCategoryPage
