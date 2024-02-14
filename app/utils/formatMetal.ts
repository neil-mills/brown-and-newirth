const colourKeys = ['y', 'r', 'w', 'plt'] as const
type Keys = typeof colourKeys[number]

type Map = {
  [K in Keys]: string
}

const map: Map = {
  y: 'yellow',
  r: 'rose',
  w: 'white',
  plt: 'platinum',
}

const isKey = (str: string): str is Keys => {
  return colourKeys.includes(str as Keys)
}

export const formatMetal = (metalCode: string): string => {
  if (metalCode !== 'plt') {
    const metal = metalCode.slice(-1)
    if (isKey(metal)) {
      const carat = metalCode.replace(metal, '')
      return `${carat}ct ${map[metal]}`
    } else {
      return ''
    }
  }
  return map[metalCode]
}
