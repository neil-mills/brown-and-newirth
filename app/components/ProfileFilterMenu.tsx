'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useProductFilterOptions } from '../hooks'

export const ProfileFilterMenu = ({ category }: { category: string }) => {
  const {
    filterOptions: profiles,
    isLoading,
    error,
  } = useProductFilterOptions({ category, filter: 'pa_profile' })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <TitleBar>Choose your profile</TitleBar>
      <FilterGrid type="pa_profile" filters={profiles} />
    </>
  )
}
