import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Profile = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Profile
