import { Mapping, ProductPatterns } from '../types'

type PatternMap = { [K in ProductPatterns]: Mapping }

export const patternMap: PatternMap = {
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
  TRINITY: {
    label: 'Trinity',
    image: '/img/svg/icon-shape-wishbone.svg',
    slug: 'trinity',
  },
  'MIXED METAL': {
    label: 'Mixed Metal',
    image: '/img/svg/icon-shape-wishbone.svg',
    slug: 'mixed-metal',
  },
}
