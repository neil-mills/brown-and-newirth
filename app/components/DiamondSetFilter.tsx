'use client'
import { formatSearchParams } from '@/app/utils'
import { TitleBar } from '@/app/components'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type DiamondSet = 'yes' | 'no'
export const DiamondSetFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const diamondSet = searchParams.get('pa_diamond-set')
  const handleClick = (diamondSet: DiamondSet) => {
    const query = formatSearchParams(searchParams.toString(), {
      'pa_diamond-set': diamondSet,
    })
    router.push(`${pathname}?${query}`)
  }

  return (
    <>
      <TitleBar>
        {diamondSet ? `Choose your shape - Diamond Set` : `Diamond set?`}
      </TitleBar>
      <div className="nav nav-pills mb-225rem row row-pad-sm" role="tablist">
        {['yes', 'no'].map((option, i) => {
          const isActive = diamondSet === option
          return (
            <div
              className={`nav-item col-sm-6 col-lg-12 col-xl-6 col-pad-sm ${
                i === 0 ? 'mb-2 mb-sm-0 mb-lg-2 mb-xl-0' : ''
              }`}
              role="presentation"
              key={option}
            >
              <button
                className={`btn btn-border w-100${isActive ? ' active' : ''}`}
                data-bs-toggle="pill"
                data-bs-target={`#diamond-set-${option}`}
                type="button"
                role="tab"
                onClick={() => handleClick(option as DiamondSet)}
                aria-selected={isActive}
              >
                {option}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
