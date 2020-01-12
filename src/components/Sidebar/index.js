import React from "react"

import Profile from "../Profile"
import SocialIcons from "../SocialIcons"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialIcons />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
