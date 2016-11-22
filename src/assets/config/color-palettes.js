module.exports = function(theme) {
  const themes = {
    light: {
      primary: {
        base: '#f2902d',
        light: '#ffffff',
        dark: '#d4720d',
      },
      accent: {
        base: '#384ea9',
        light: '#9facdf',
        dark: '#212e64',
      },
      foreground: {
        base: '#393939',
        light: '#6e6e6e',
        lighter: '#b2b2b2',
        dark: '#111',
        darker: '#000',
      },
      background: {
        base: '#f8f5f5',
        light: '#fff',
        dark: '#ddd',
      },
    },
  }

  return themes[theme] || themes.light
}
