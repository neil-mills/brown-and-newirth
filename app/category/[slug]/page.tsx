import { notFound } from 'next/navigation'
import {
  BackLink,
  CategoryBanner,
  ShapeFilterMenu,
  ProfileFilterMenu,
  FilteredProducts,
} from '@/app/components'
import { useCategory, useFilterSearchParams } from '@/app/hooks'

interface Props {
  params: { slug: string }
  searchParams: { shape?: string; profile?: string }
}

const ProductCategoryPage = ({ params: { slug }, searchParams }: Props) => {
  const filters = useFilterSearchParams(searchParams)
  const [category, categoryData] = useCategory(slug)
  if (!category || !categoryData) {
    return notFound()
  }
  return (
    <>
      <div className="col-left h-100 d-flex flex-column">
        <BackLink />
        <div className="col-left-inner flex-grow-1 d-flex flex-column p-0">
          <CategoryBanner category={categoryData} />
          <ShapeFilterMenu category={category} />
          <ProfileFilterMenu category={category} />
        </div>
      </div>
      <div className="col col-right h-100">
        <FilteredProducts filters={filters} category={category} />
      </div>
    </>
  )
}

export default ProductCategoryPage
