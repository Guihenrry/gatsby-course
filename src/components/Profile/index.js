import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from '../../utils/getThemeColor'

import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query myMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileLink
        cover
        direction="left"
        duration={0.6}
        bg={getThemeColor()}
        to="/"
        activeClassName="active"
      >
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
