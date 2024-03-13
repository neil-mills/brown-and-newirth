import { useCentreCarats, useStore } from '@/app/hooks'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import icon from '@/public/img/svg/icon-shape-round.svg'
import { formatSearchParams } from '../utils'

export const DiamondCentreCaratFilter = () => {
  const pathname = usePathname()
  const centreCarats = useCentreCarats()
  const router = useRouter()
  const searchParams = useStore((store) => store.searchParams)

  const handleClick = (centreCarat: string) => {
    const query = formatSearchParams(searchParams, {
      'pa_centre-carat': centreCarat,
    })
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="row row-pad-xs row-panels-sm row-natural-created justify-content-center text-xs text-uppercase text-center">
      {centreCarats.map((centreCarat) => (
        <div
          key={centreCarat.slug}
          className="col-ninth col-pad-xs col-panel-xs"
        >
          <button
            className={`btn btn-icon alt w-100 natural ${centreCarat.class}`}
            disabled={centreCarat.disabled}
            onClick={() => handleClick(centreCarat.slug)}
          >
            <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
              <Image src={icon} alt="Round" />
            </div>
          </button>
          <p className="mt-2">
            {centreCarat.label}
            <sup>ct</sup>
          </p>
        </div>
      ))}
    </div>
  )
}
