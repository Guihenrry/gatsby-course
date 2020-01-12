import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      category="Misc"
      date="30 de julho de 2019"
      timeToRead="5"
      title="Meu primeiro post"
      description="Então essa é uma das razões para craição deste blog."
    />
  </Layout>
)

export default IndexPage
