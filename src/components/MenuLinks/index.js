import React from "react"

import links from "./content"

import getThemeColor from '../../utils/getThemeColor'

import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem key={index}>
          <S.MenuLinksLink
            cover
            direction="left"
            duration={0.6}
            bg={getThemeColor()}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks