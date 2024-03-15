import { useSearchParams } from 'next/navigation'
import { useFilterSearchParams, useProductFilterOptions } from '@/app/hooks'
import { FilterGrid, TitleBar } from '@/app/components'
import { Styles } from '@/app/types'

export const PatternFilter = ({ category }: { category: Styles }) => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const {
    filterOptions: patterns,
    isLoading,
    error,
  } = useProductFilterOptions({
    filter: 'pa_pattern',
    filters,
    category,
  })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Choose your style</TitleBar>
      <FilterGrid type={'pa_pattern'} filters={patterns} />
    </>
  )
}
