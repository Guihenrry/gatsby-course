import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { Lightbulb as Light } from "styled-icons/remix-fill/Lightbulb"
import { Grid } from "styled-icons/boxicons-regular/Grid"
import { ThList as List } from 'styled-icons/typicons/ThList'
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  console.log(isListMode);
  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarItem>
          <S.MenuBarLink to="/" title="Voltar Para Home" activeClassName="active">
            <Home />
          </S.MenuBarLink>
        </S.MenuBarItem>
  
        <S.MenuBarItem>
          <S.MenuBarLink to="/search" title="Pesquisar" activeClassName="active">
            <Search />
          </S.MenuBarLink>
        </S.MenuBarItem>
      </S.MenuBarGroup>
  
      <S.MenuBarGroup>
        <S.MenuBarItem 
          title="Mudar o Tema" 
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
  
        <S.MenuBarItem title="Mudar Vizualização" onClick={() => {
          window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
        }}>
          {isListMode ? <Grid /> : <List />} 
        </S.MenuBarItem>
  
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}




export default MenuBar
