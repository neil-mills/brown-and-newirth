'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilterSearchParams, useProductFilterOptions } from '../hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Styles } from '@/app/types'
import { useEffect } from 'react'

export const ShapeFilterMenu = ({ category }: { category: Styles }) => {
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
      <FilterGrid type={filter} filters={shapes} />
    </div>
  )
}
