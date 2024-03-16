import { FilterLayers } from './../types/FilterLayers.type'
import { Product, Variation, Images, Styles } from '@/app/types'
import { useFilterSearchParams, useGetData } from '@/app/hooks'
import { getUniqueArrayValues, productToVariation } from '@/app/utils'
import { stylesMap } from '@/app/maps'
import { useSearchParams } from 'next/navigation'

interface ReturnValues {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variations: Variation[]
  images: Images<string[]>
  otherOptions: Variation[]
  category: Styles[] | null
  filterLayers: FilterLayers[]
}

interface Props {
  sku: string | null
  productId: string | null
}

export const useProduct = ({ sku, productId }: Props): ReturnValues => {
  let product: Product | null = null
  let variations: Variation[] = []
  let images: Images<string[]> = { thumbnail: [], medium: [], large: [] }
  let otherOptions: Variation[] = []
  let category: Styles[] | null = null
  let filterLayers: FilterLayers[] = []
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  console.log({ filters })

  const { data: products, error, isLoading } = useGetData()
  if (!isLoading && !error) {
    if (productId) {
      product =
        products?.find(
          (product) => product?.productId.toString() === productId
        ) || null
    }

    if (sku) {
      product =
        products?.find((product) =>
          product.variations.some((variation) => variation.sku === sku)
        ) || null
    }

    if (product) {
      const productVariations = product?.variations?.length
        ? product.variations
        : [productToVariation(product)]
      if (productId) {
        const skus = getUniqueArrayValues<string[]>(
          productVariations.map((variation) => variation.sku)
        )
        variations =
          skus.map(
            (sku) =>
              productVariations.filter((variation) => variation.sku === sku)[0]
          ) || []
      }
      if (sku) {
        variations = sku
          ? productVariations.filter((variation) => variation.sku === sku)
          : []
      }

      category =
        product?.attributes?.['pa_type-2'] ||
        product?.attributes?.pa_style ||
        product?.attributes?.pa_pattern ||
        null

      if (category) {
        category.forEach((cat) => {
          filterLayers = [...filterLayers, ...stylesMap[cat].filterLayers]
        })
        filterLayers = getUniqueArrayValues<FilterLayers[]>(filterLayers)
      }

      if (variations?.length) {
        images = {
          thumbnail: getUniqueArrayValues<string[]>(
            variations.map(
              (variation) => variation['variation-images'].thumbnail
            )
          ),
          medium: getUniqueArrayValues<string[]>(
            variations.map((variation) => variation['variation-images'].medium)
          ),
          large: getUniqueArrayValues<string[]>(
            variations.map((variation) => variation['variation-images'].large)
          ),
        }
        const otherSkus = Array.from(
          new Set(
            productVariations
              .filter((variation) => variation.sku !== variations[0].sku)
              .map((variation) => variation.sku)
          )
        )
        otherOptions = otherSkus.map((sku) => {
          const variations = productVariations.filter(
            (variation) => variation.sku === sku
          )
          const images: Images<string[]> = {
            thumbnail: getUniqueArrayValues<string[]>(
              variations.map(
                (variation) => variation['variation-images'].thumbnail
              )
            ),
            medium: getUniqueArrayValues<string[]>(
              variations.map(
                (variation) => variation['variation-images'].medium
              )
            ),
            large: getUniqueArrayValues<string[]>(
              variations.map((variation) => variation['variation-images'].large)
            ),
          }

          return {
            ...variations[0],
            images,
          }
        })
      }
    }
  }
  return {
    product,
    category,
    filterLayers,
    variations,
    images,
    otherOptions,
    isLoading,
    error,
  }
}
