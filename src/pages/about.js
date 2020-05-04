import React, { Fragment } from "react"
import {Link,graphql, useStaticQuery} from "gatsby";

import Layout from "../components/layout/layout";
import Button from "react-bootstrap/Button";
import data from "../data/data.json";
import Img from "gatsby-image";
import aboutStyle from "./about.module.scss";


const About = props => {
  const data1 = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq:"training-image-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
     <Layout>
          <div className={aboutStyle.caption}>
            <h6>{data["caption"].subtitle}</h6>
            <h2>{data["caption"].title} <em>{data["caption"].titleInner}</em></h2>
            <Button>{data["caption"].buttonText}</Button>
          
           </div>
           <Img className={aboutStyle.image} fluid={data1.placeholderImage.childImageSharp.fluid} />
     </Layout>
  )
}
    
export default About
