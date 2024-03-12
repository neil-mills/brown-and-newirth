'use client'
import { usePathname, useRouter } from 'next/navigation'
import {
  useDiamondOrigins,
  useProductFilterOptions,
  useStore,
} from '@/app/hooks'

export const DiamondOriginFilter = () => {
  const { product } = useStore((store) => store.selectedSku)
  const {
    filterOptions: diamondOrigins,
    isLoading,
    error,
  } = useProductFilterOptions({
    filter: 'pa_diamond',
    productId: product?.productId,
  })
  // const diamondOrigins = useDiamondOrigins()
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
                router.push(`${pathname}?pa_diamond=${diamondOrigin.slug}`)
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
