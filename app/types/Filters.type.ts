export type ProductAttributes =
  | 'pa_shape'
  | 'pa_profile'
  | 'pa_diamond'
  | 'pa_centre-carat'

export type VariationAttributes =
  | 'pa_metal-code'
  | 'pa_total-carat'
  | 'pa_centre-carat'
  | 'pa_diamond-quality'
  | 'pa_diamond'
  | 'pa_gauge'
  | 'pa_width'
  | 'pa_size'

export type ProductFilters = {
  [TKey in ProductAttributes]: string
}

export type VariationFilters = {
  [TKey in VariationAttributes]: string
}
