import { Mapping, ProductPatterns } from '../types'

type PatternMap = { [K in ProductPatterns]: Mapping }

export const patternMap: PatternMap = {
  PLAIN: {
    label: 'Plain',
    image: '/img/svg/icon-shape-curved.svg',
    slug: 'plain',
  },
  CELTIC: {
    label: 'Celtic',
    image: '/img/svg/icon-shape-cutaway.svg',
    slug: 'celtic',
  },
  CERAMIC: {
    label: 'Ceramic',
    image: '/img/svg/icon-shape-pinch.svg',
    slug: 'ceramic',
  },
  CONTEMPORARY: {
    label: 'Contemporary',
    image: '/img/svg/icon-shape-twist.svg',
    slug: 'contemporary',
  },
  SPARKLE: {
    label: 'Sparkle',
    image: '/img/svg/icon-shape-wishbone.svg',
    slug: 'sparkle',
  },
}
