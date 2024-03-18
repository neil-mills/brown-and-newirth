import { useSearchParams } from 'next/navigation'
import { useFilterSearchParams, useProductFilterOptions } from '@/app/hooks'
import { FilterGrid, TitleBar } from '@/app/components'
import { Styles } from '@/app/types'

export const SettingFilterMenu = ({ category }: { category: Styles }) => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const {
    filterOptions: settings,
    isLoading,
    error,
  } = useProductFilterOptions({
    filter: 'pa_setting',
    filters,
    category,
  })
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <div className="mb-225rem">
      <TitleBar>Choose your setting</TitleBar>
      <FilterGrid type={'pa_setting'} filters={settings} />
    </div>
  )
}

export default SettingFilterMenu
