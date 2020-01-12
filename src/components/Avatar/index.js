import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Profile = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Profile
