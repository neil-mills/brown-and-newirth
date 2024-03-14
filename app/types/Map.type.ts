export interface Mapping {
  label: string
  image?: string
  class?: string
  disabled?: boolean
  slug: string
  filter?: string[]
}

export interface Map {
  [key: string]: Mapping
}
