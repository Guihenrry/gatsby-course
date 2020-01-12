import styled from "styled-components"

export const SocialIconsWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;
`

export const SocialIconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const SocialIconsItem = styled.li``

export const SocialIconsLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
