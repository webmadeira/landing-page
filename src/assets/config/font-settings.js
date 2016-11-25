const baseFontSize = 1
const baseLineHeight = baseFontSize * 1.25

const fontSizes = {
  sm: {
    'font-size': '.75rem',
    'line-height': `${baseLineHeight}rem`,
  },
  normal: {
    'font-size': '1rem',
    'line-height': `${baseLineHeight}rem`,
  },
  lg: {
    'font-size': '1.33rem',
    'line-height': `${baseLineHeight * 1.5}rem`,
  },
  xl: {
    'font-size': '1.777rem',
    'line-height': `${baseLineHeight * 1.5}rem`,
  },
}


const fontFamilies = {
  primary: {
    name: '\'Open Sans\', sans-serif',
    fontWeights: {
      regular: '400',
      semibold: '600',
      bold: '700',
    },
  },
}

module.exports = {
  fontSizes,
  fontFamilies,
}
