'use client'
import { useFilterSearchParams, useRangeFilter } from '@/app/hooks'
import { formatSearchParams } from '@/app/utils'
import icon from '@/public/img/svg/icon-shape-round.svg'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Carats } from '../types'
import { useEffect, useState } from 'react'

interface Props {
  attribute: 'pa_centre-carat' | 'pa_total-carat'
}

export const DiamondCaratFilter = ({ attribute }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCarats, setSelectedCarats] = useState<string[]>([])
  const filters = useFilterSearchParams(searchParams.toString())
  const [carats, availableCarats] = useRangeFilter<Carats>({
    rangeFilter: attribute,
    filters,
  })
  const router = useRouter()

  const handleClick = (value: string) => {
    setSelectedCarats(
      selectedCarats.includes(value)
        ? selectedCarats.filter((option) => option !== value)
        : [value, ...selectedCarats]
    )
  }

  useEffect(() => {
    const query = selectedCarats.length
      ? formatSearchParams(searchParams.toString(), {
          [attribute]: selectedCarats.join(','),
        })
      : null
    if (query) {
      const { protocol, host, pathname } = window.location
      const newUrl = `${protocol}//${host}${pathname}?${query}`
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }, [router, selectedCarats, attribute, searchParams, pathname])

  return (
    <div className="row row-pad-xs row-panels-sm row-natural-created justify-content-center text-xs text-uppercase text-center">
      {carats.map((carat) => (
        <div key={carat.slug} className="col-ninth col-pad-xs col-panel-xs">
          <button
            className={`btn btn-icon alt w-100 natural ${carat.class}`}
            disabled={!availableCarats.includes(carat.slug as Carats)}
            onClick={() => handleClick(carat.slug)}
            aria-pressed={selectedCarats.includes(carat.slug)}
          >
            <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
              <Image src={icon} alt="Round" />
            </div>
          </button>
          <p className="mt-2">
            {carat.label}
            <sup>ct</sup>
          </p>
        </div>
      ))}
    </div>
  )
}
