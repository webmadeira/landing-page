const screenSizes = {
  xs: {
    get max() {
      return (screenSizes.sm.min - 1)
    },
  },
  sm: {
    min: 600,
    get max() {
      return (screenSizes.md.min - 1)
    },
  },
  md: {
    min: 960,
    get max() {
      return (screenSizes.lg.min - 1)
    },
  },
  lg: {
    min: 1280,
    get max() {
      return (screenSizes.sm.min - 1)
    },
  },
  xl: {
    min: 1920,
    get max() {
      return (screenSizes.sm.min - 1)
    },
  },
}

module.exports = {
  screenSizes,
}
