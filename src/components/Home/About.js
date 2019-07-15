import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/anilink"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <section className={styles.about}>
      <Title title="our" subtitle="process" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about big step"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            A whole and fulfilling life is really the point of recovery. While
            that means something different to everyone, the program at Big Step
            is designed to rapidly integrate men & women back into life—into
            work, into school, into volunteering, and for those who seek it,
            participation in the faith community.
          </p>
          <p>
            Life goals, and the skills to achieve them, are what we are about.
            Some men & women show up without knowing how to make up a bed, or
            prepare a basic dinner, while others show up having run successful
            businesses. We meet men & women where they are in life, and prepare
            them to move on with the skills and tools they need.
          </p>
          <AniLink fade to="/tours" className="btn-primary">
            learn more
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
