'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useDiamondOrigins } from '@/app/hooks'

export const DiamondOriginFilter = () => {
  const diamondOrigins = useDiamondOrigins()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <div className="row row-pad-sm">
        {diamondOrigins.map((diamondOrigin, i) => (
          <div
            key={diamondOrigin.slug}
            className={`col-sm-6 col-lg-12 col-xl-6 col-pad-sm ${
              i === 0 ? 'mb-2 mb-sm-0 mb-lg-2 mb-xl-0' : ''
            }`}
          >
            <button
              className={`btn btn-filter btn-border ${diamondOrigin.class} w-100`}
              onClick={() =>
                router.push(`${pathname}?diamondOrigin=${diamondOrigin.slug}`)
              }
            >
              <span>{diamondOrigin.label}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
