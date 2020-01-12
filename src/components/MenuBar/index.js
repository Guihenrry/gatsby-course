import React from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { Lightbulb as Light } from "styled-icons/remix-fill/Lightbulb"
import { Grid } from "styled-icons/boxicons-regular/Grid"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"

import * as S from "./styled"

const MenuBar = () => (
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
      <S.MenuBarItem title="Mudar o Tema">
        <Light />
      </S.MenuBarItem>

      <S.MenuBarItem title="Mudar Vizualização">
        <Grid />
      </S.MenuBarItem>

      <S.MenuBarItem title="Ir para o topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
