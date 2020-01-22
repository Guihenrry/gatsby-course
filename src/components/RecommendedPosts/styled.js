import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);

  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5;
  width: 50%;

  display: flex;

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }
`
