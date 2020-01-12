import React from "react"

import * as S from "./styled"

import Icons from "./Icons"
import Links from "./content"

const SocialIcons = () => (
  <S.SocialIconsWrapper>
    <S.SocialIconsList>
      {Links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialIconsItem key={index}>
            <S.SocialIconsLink
              href={link.url}
              target="_blank"
              title={link.label}
              rel="noopener norefer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialIconsLink>
          </S.SocialIconsItem>
        )
      })}
    </S.SocialIconsList>
  </S.SocialIconsWrapper>
)

export default SocialIcons
