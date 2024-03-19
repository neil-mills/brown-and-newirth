'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilterSearchParams, useProductFilterOptions } from '../hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Styles } from '@/app/types'
import { useEffect } from 'react'

interface Props {
  category: Styles
  hasSibling?: boolean
}

export const ShapeFilterMenu = ({ category, hasSibling = false }: Props) => {
  const searchParams = useSearchParams()
  const filter = category === 'Shaped' ? 'pa_shaped' : 'pa_shape'
  const shapeCategory = category === 'Shaped' ? null : category
  const filters = useFilterSearchParams(searchParams.toString())
  const router = useRouter()
  const pathname = usePathname()
  const {
    filterOptions: shapes,
    isLoading,
    error,
  } = useProductFilterOptions({ filter, filters, category: shapeCategory })
  let sibling = null
  const { filterOptions: settings } = useProductFilterOptions({
    filter: 'pa_setting',
    filters,
    category: shapeCategory,
  })
  if (hasSibling) {
    sibling = { type: 'pa_setting', filters: settings }
  }
  useEffect(() => {
    shapes.forEach((shape) =>
      router.prefetch(`${pathname}?pa_shape=${shape.slug}`)
    )
  }, [shapes, router, pathname])

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="mb-225rem">
      <TitleBar>Choose your shape</TitleBar>
      <FilterGrid type={filter} filters={shapes} sibling={sibling} />
    </div>
  )
}
