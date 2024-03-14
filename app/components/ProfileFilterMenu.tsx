'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilterSearchParams, useProductFilterOptions } from '@/app/hooks'
import { useSearchParams } from 'next/navigation'

export const ProfileFilterMenu = ({ category }: { category: string }) => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const {
    filterOptions: profiles,
    isLoading,
    error,
  } = useProductFilterOptions({
    filter: 'pa_profile',
    filters,
    category,
  })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Choose your profile</TitleBar>
      <FilterGrid type={'pa_profile'} filters={profiles} />
    </>
  )
}
