const colourKeys = ['y', 'r', 'w', 'plt'] as const
type Keys = typeof colourKeys[number]

type Map = {
  [K in Keys]: string
}

export const metalsMap: Map = {
  plt: 'Platinum',
  y: 'Gold',
  w: 'White Gold',
  r: 'Rose Gold',
}
