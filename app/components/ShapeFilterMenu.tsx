'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilters } from '../hooks'

export const ShapeFilterMenu = ({ category }: { category: string }) => {
  const { filters: shapes, isLoading, error } = useFilters(category, 'pa_shape')
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  console.log(shapes)
  return (
    <>
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type="shape" filters={shapes} />
    </>
  )
}
