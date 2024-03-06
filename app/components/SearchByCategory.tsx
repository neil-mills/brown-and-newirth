'use client'
import { useCategories } from '../hooks'
import { ProductGrid } from '@/app/components'
import TitleBar from './TitleBar'

export const SearchByCategory = () => {
  const { categoryProducts, isLoading, error } = useCategories()
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Search by style</TitleBar>
      <ProductGrid type="category" items={categoryProducts} />
    </>
  )
}
