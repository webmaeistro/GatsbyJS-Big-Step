import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Services from "../Components/Home/Services"
//import Philosophy from "../components/Philosophy/Philosophy"
import SEO from "../components/SEO"

const philosophy = ({ data }) => {
  return (
    <Layout>
      <SEO title="tours" />
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Services />
    </Layout>
  )
}
export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default philosophy