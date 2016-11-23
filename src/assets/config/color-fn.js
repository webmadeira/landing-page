const colorPalettes = require('./color-palettes')

module.exports = function themeColor(theme) {
  const themePalette = colorPalettes(theme)

  /**
   * Responsible for providing the color
   * for the palette and variant asked
   */
  return function getColor(palette = 'primary', variant = 'base') {
    return themePalette[palette][variant]
  }
}
