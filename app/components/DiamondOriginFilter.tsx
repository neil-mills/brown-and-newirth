'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useProductFilterOptions, useRangeFilter, useStore } from '@/app/hooks'
import classNames from 'classnames'
import { formatSearchParams, searchParamsToObject } from '../utils'

export const DiamondOriginFilter = () => {
  const { product } = useStore((store) => store.selectedSku)
  const searchParams = useStore((store) => store.searchParams)
  const searchParamsObj = searchParamsToObject(searchParams)
  const pathname = usePathname()
  const router = useRouter()
  const [diamondOrigins, availableDiamondOrigins] = useRangeFilter({
    rangeFilter: 'pa_diamond',
    filters: null,
  })

  const handleClick = (diamondOrigin: string) => {
    const query = formatSearchParams(searchParams, {
      pa_diamond: diamondOrigin,
    })
    router.push(`${pathname}?${query}`)
  }

  return (
    <>
      <div className="row row-pad-sm">
        {diamondOrigins.map((diamondOrigin, i) => {
          const btnClass = classNames({
            'bg-pink': diamondOrigin.slug === searchParamsObj?.pa_diamond,
            'btn-border': diamondOrigin.slug !== searchParamsObj?.pa_diamond,
          })
          return (
            <div
              key={diamondOrigin.slug}
              className={`col-sm-6 col-lg-12 col-xl-6 col-pad-sm ${
                i === 0 ? 'mb-2 mb-sm-0 mb-lg-2 mb-xl-0' : ''
              }`}
            >
              <button
                className={`btn btn-filter ${btnClass} ${diamondOrigin.class} w-100`}
                // disabled={diamondOrigins.length === 1}
                onClick={() => handleClick(diamondOrigin.slug)}
                disabled={!availableDiamondOrigins.includes(diamondOrigin.slug)}
              >
                <span>{diamondOrigin.label}</span>
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
