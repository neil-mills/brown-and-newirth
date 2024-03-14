export type FilterAttributes =
  | 'pa_diamond'
  | 'pa_centre-carat'
  | 'pa_shape'
  | 'pa_shaped'
  | 'pa_diamond-set'
  | 'pa_profile'
  | 'pa_gauge'
  | 'pa_width'

export type VariationAttributes =
  | 'pa_metal-code'
  | 'pa_total-carat'
  | 'pa_centre-carat'
  | 'pa_diamond-quality'
  | 'pa_centre-carat'
  | 'pa_diamond'
  | 'pa_gauge'
  | 'pa_width'
  | 'pa_size'

export type ProductAttributes =
  | 'pa_metal-code'
  | 'pa_gauge'
  | 'pa_total-carat'
  | 'pa_centre-carat'
  | 'pa_diamond-quality'
  | 'pa_width'
  | 'pa_size'
  | 'pa_style'
  | 'pa_type-2'
  | 'pa_profile'
  | 'pa_shape'
  | 'pa_shoulders'
  | 'pa_finish'
  | 'pa_pattern'
  | 'pa_coverage'
  | 'pa_setting'
  | 'pa_shaped'
  | 'pa_diamond'

export type Filters = {
  [TKey in FilterAttributes]?: string
}

export type ProductFilters = {
  [TKey in ProductAttributes]?: string
}

export type VariationFilters = {
  [TKey in VariationAttributes]?: string
}
