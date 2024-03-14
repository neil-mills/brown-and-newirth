'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilterSearchParams, useProductFilterOptions } from '../hooks'
import { useSearchParams } from 'next/navigation'

export const ShapeFilterMenu = ({ category }: { category: string }) => {
  const searchParams = useSearchParams()
  const filter = category === 'Shaped' ? 'pa_shaped' : 'pa_shape'
  const shapeCategory = category === 'Shaped' ? null : category
  const filters = useFilterSearchParams(searchParams.toString())
  const {
    filterOptions: shapes,
    isLoading,
    error,
  } = useProductFilterOptions({ filter, filters, category: shapeCategory })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type={filter} filters={shapes} />
    </>
  )
}
