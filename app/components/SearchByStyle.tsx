'use client'
import TitleBar from './TitleBar'
import { useStyles } from '../hooks'
import { ProductGrid } from './ProductGrid'

const SearchByStyle = () => {
  const { styles, isLoading, error } = useStyles()
  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <TitleBar>Search by style</TitleBar>
      <ProductGrid type="style" items={styles} />
    </>
  )
}

export default SearchByStyle
