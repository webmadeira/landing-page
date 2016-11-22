const baseFontSize = 1
const baseLineHeight = baseFontSize * 1.25

module.exports = {
  fontSizes: {
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
      'line-height': `${baseLineHeight * 2}rem`,
    },
    xl: {
      'font-size': '1.777rem',
      'line-height': `${baseLineHeight * 2}rem`,
    },
  },
}
