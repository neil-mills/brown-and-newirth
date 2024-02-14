'use client'
import Link from 'next/link'
import { useCategories } from '../hooks'
import { ProductGrid } from '@/app/components'

export const SearchByCategory = () => {
  const { categoryProducts, isLoading, error } = useCategories()
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <h3>Search by category</h3>
      <ProductGrid type="category" items={categoryProducts} />
    </>
  )
}
