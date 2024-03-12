import { Product, Variation } from '@/app/types'
import { useGetData } from '@/app/hooks'
import { getUniqueArrayValues } from '../utils'

interface ReturnValues {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variations: Variation[]
  images: string[]
  otherOptions: Variation[]
}

interface Props {
  sku: string | null
  productId: string | null
}

export const useProduct = ({ sku, productId }: Props): ReturnValues => {
  let product: Product | null = null
  let variations: Variation[] = []
  let images: string[] = []
  let otherOptions: Variation[] = []
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
      if (productId) {
        const skus = getUniqueArrayValues(
          product.variations.map((variation) => variation.sku)
        )
        variations =
          skus.map(
            (sku) =>
              product!.variations.filter(
                (variation) => variation.sku === sku
              )[0]
          ) || []
      }
      if (sku) {
        variations = sku
          ? product.variations.filter((variation) => variation.sku === sku)
          : []
      }

      if (variations?.length) {
        images = getUniqueArrayValues(
          variations.map((variation) => variation.image)
        )
        const otherSkus = Array.from(
          new Set(
            product.variations
              .filter((variation) => variation.sku !== variations[0].sku)
              .map((variation) => variation.sku)
          )
        )
        otherOptions = otherSkus.map((sku) => {
          const variations = product!.variations.filter(
            (variation) => variation.sku === sku
          )
          const images = Array.from(
            new Set(variations.map((variation) => variation.image))
          )
          return {
            ...variations[0],
            images,
          }
        })
      }
    }
  }
  return { product, variations, images, otherOptions, isLoading, error }
}
