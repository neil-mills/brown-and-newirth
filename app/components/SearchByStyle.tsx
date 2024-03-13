'use client'
import { TitleBar, ProductGrid } from '@/app/components'
import { useStyles } from '@/app/hooks'

export const SearchByStyle = () => {
  const { styles, isLoading, error } = useStyles()
  const allStyles = [
    ...styles,
    { label: 'Shaped', slug: 'shaped', image: '/img/09_shaped.png' },
  ]
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Search by style</TitleBar>
      <ProductGrid type="style" items={allStyles} />
    </>
  )
}
