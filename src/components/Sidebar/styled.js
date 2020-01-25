import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 20rem;
  padding: 2rem;
  text-align: center;
  position: fixed;
  background: var(--mediumBackground);
  border: 1px solid var(--borders);

  ${media.lessThan('large')`
    align-items: flex-start; 
    width: 100%;
    height: auto;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid var(--borders);
  `}
`
