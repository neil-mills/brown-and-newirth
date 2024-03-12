'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useProductFilterOptions } from '../hooks'

export const ShapeFilterMenu = ({ category }: { category: string }) => {
  const {
    filterOptions: shapes,
    isLoading,
    error,
  } = useProductFilterOptions('pa_shape', category)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type="pa_shape" filters={shapes} />
    </>
  )
}
