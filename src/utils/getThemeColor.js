const getThemeColor = () => {
  const theme = typeof window != 'undefined' && window.__theme

  if (theme === 'light') return '#FFF'
  if (theme === 'dark') return '#16202C'
}

export default getThemeColor;