import styled from "styled-components"
import media from 'styled-media-query'
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;
  height: 100vh;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);


  ${media.lessThan('large')`
    width: 100%;
    flex-direction: row;
    height: auto;
    bottom: 0;
    border-top: 1px solid var(--borders);
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  transition: color 0.5s;
  fill: #333;

  &.light {
    color: #D4D400;

    &:hover {
      color: #E2E240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  .active {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    &.change-view {
      display: none;
    }
  `}
`

export const MenuBarLink = styled(Link)`
  color: var(--texts);
  display: block;
`
