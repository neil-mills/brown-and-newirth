'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useShapes } from '../hooks'

export const ShapeFilterMenu = () => {
  const { shapes, isLoading, error } = useShapes()
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type="shape" filters={shapes} />
    </>
  )
}
