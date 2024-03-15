'use client'
import { notFound, useSearchParams } from 'next/navigation'
import { stylesMap } from '@/app/maps'
import { Styles } from '@/app/types'
import {
  BackLink,
  CategoryBanner,
  ShapeFilterMenu,
  ProfileFilterMenu,
  FilteredProducts,
  PatternFilter,
} from '@/app/components'
import { useCategory, useFilterSearchParams } from '@/app/hooks'
import DiamondSetFilter from '@/app/components/DiamondSetFilter'

interface Props {
  params: { slug: string }
}

const ProductCategoryPage = ({ params: { slug } }: Props) => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const [category, categoryData] = useCategory(slug)
  const showPatternFilter =
    stylesMap[category as Styles].filterLayers.includes('pa_pattern')
  const showDiamondSetFilter =
    stylesMap[category as Styles].filterLayers.includes('pa_diamond-set')
  const hasShapeFilter =
    stylesMap[category as Styles].filterLayers.includes('pa_shape')
  const showShapeFilter =
    (hasShapeFilter && category !== 'Shaped') ||
    (hasShapeFilter &&
      category === 'Shaped' &&
      searchParams.get('pa_diamond-set'))

  const showProfileFilter =
    stylesMap[category as Styles].filterLayers.includes('pa_profile')
  if (!category || !categoryData) {
    return notFound()
  }
  return (
    <>
      <div className="col-left h-100 d-flex flex-column">
        <BackLink />
        <div className="col-left-inner flex-grow-1 d-flex flex-column p-0">
          <CategoryBanner category={categoryData} />
          {showDiamondSetFilter && <DiamondSetFilter />}
          {showShapeFilter && <ShapeFilterMenu category={category} />}
          {showProfileFilter && <ProfileFilterMenu category={category} />}
          {showPatternFilter && <PatternFilter category={category} />}
        </div>
      </div>
      <div className="col col-right h-100">
        <FilteredProducts filters={filters} category={category} />
      </div>
    </>
  )
}

export default ProductCategoryPage
