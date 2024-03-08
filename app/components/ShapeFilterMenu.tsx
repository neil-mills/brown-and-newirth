'use client'
import FilterGrid from './FilterGrid'
import TitleBar from './TitleBar'
import { useShapes } from '../hooks'

const ShapeFilterMenu = () => {
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

export default ShapeFilterMenu
