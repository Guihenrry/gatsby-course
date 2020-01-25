import styled from "styled-components"
import media from 'styled-media-query'
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: color 0.5s;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWarapper = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: column;
  }

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1rem
  `}
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 90px;
  background: ${props => (props.background ? props.background : "var(--highlight)")};
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 50%;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan('large')`
    border-radius: 0; 
    font-size: 1rem;
    min-width: auto;
    min-height: auto;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.7rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin-left: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
