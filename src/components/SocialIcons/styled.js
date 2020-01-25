import styled from "styled-components"
import media from 'styled-media-query'

export const SocialIconsWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialIconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const SocialIconsItem = styled.li``

export const SocialIconsLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
