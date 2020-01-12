import styled from "styled-components"
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
  background: #192734;
  border-left: 1px solid #38444d;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  transition: color 0.5s;
  fill: #333;

  &:hover {
    color: #1fa1f2;
  }

  .active {
    color: #1fa1f2;
  }
`

export const MenuBarLink = styled(Link)`
  color: #8899a6;
  display: block;
`
