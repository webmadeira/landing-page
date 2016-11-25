module.exports = function pageTheme(theme) {
  const themes = {
    light: {
      primary: {
        base: '#74969f',
        light: '#e1eff2',
        dark: '#496269',
      },
      accent: {
        base: '#b04638',
        light: '#d27b70',
        dark: '#933a2f',
      },
    },
  }

  return themes[theme] || themes.light
}
