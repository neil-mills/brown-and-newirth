'use client'
import { FilterGrid, TitleBar } from '@/app/components'
import { useFilters } from '../hooks'

export const ProfileFilterMenu = ({ category }: { category: string }) => {
  const {
    filters: profiles,
    isLoading,
    error,
  } = useFilters(category, 'pa_profile')
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <TitleBar>Choose your profile</TitleBar>
      <FilterGrid type="profile" filters={profiles} />
    </>
  )
}
