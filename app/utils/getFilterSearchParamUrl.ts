import { Mapping } from '@/app/types'

interface Props {
  type: string
  selectedOptions: string[]
  sibling?: { type: string; filters: Mapping[] } | null
  searchParams: string
}

export const getFilterSearchParamUrl = ({
  type,
  selectedOptions,
  sibling,
  searchParams,
}: Props) => {
  if (type === 'pa_setting') console.log(sibling)
  const allSearchParams = searchParams.toString()
    ? searchParams.toString().split('&')
    : []
  let newParams: Record<string, string> = {}
  let query = ''
  if (allSearchParams.length) {
    newParams = allSearchParams.reduce((acc, searchParam) => {
      const [key, values] = searchParam.split('=')
      return { ...acc, [key]: values }
    }, {})
    if (newParams[type] && selectedOptions.length === 0) {
      delete newParams[type]
    }
    if (selectedOptions.length) {
      newParams[type] = selectedOptions.join(',')
    }
    if (sibling && newParams[sibling.type]) {
      newParams[sibling.type] = newParams[sibling.type]
        .split(',')
        .filter((value) =>
          sibling.filters.some((filter) => filter.slug === value)
        )
        .join(',')
    }
    query = Object.entries(newParams)
      .reduce(
        (acc, [key, value]) => [...acc, `${key}=${value}`],
        [] as string[]
      )
      .join('&')
  }
  if (!allSearchParams.length && selectedOptions.length) {
    query = `${type}=${selectedOptions.join(',')}`
  }
  const { protocol, host, pathname } = window.location
  const newUrl = `${protocol}//${host}${pathname}${query ? `?${query}` : ''}`
  return newUrl
}
