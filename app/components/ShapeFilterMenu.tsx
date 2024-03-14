'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useProductFilterOptions } from '../hooks'

export const ShapeFilterMenu = ({ category }: { category: string }) => {
  const filter = category === 'Shaped' ? 'pa_shaped' : 'pa_shape'
  const shapeCategory = category === 'Shaped' ? null : category
  const {
    filterOptions: shapes,
    isLoading,
    error,
  } = useProductFilterOptions({ filter, category: shapeCategory })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type={filter} filters={shapes} />
    </>
  )
}
