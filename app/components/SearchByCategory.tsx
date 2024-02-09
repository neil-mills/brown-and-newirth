'use client'
import Link from 'next/link'
import { useCategories } from '../hooks'

export const SearchByCategory = () => {
  const { categoryProducts, isLoading, error } = useCategories()
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <h3>Search by category</h3>
      {categoryProducts.map((categoryProduct) => (
        <li key={categoryProduct.productId}>
          <Link
            href={`/products/category/${categoryProduct.category.toLowerCase()}`}
          >
            {categoryProduct.category}
          </Link>
        </li>
      ))}
    </>
  )
}
