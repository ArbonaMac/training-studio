import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import footerStyle from "./footer.module.scss"
const Footer =()=>{
    const data = useStaticQuery(graphql`
      query{
          site{
            siteMetadata{
              author
            }
          }
        }
    `)
    return( 
      <footer className={footerStyle.footer}>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <p>Copyright &copy;  {data.site.siteMetadata.author}
                      - Designed by <a rel="nofollow" href="https://templatemo.com" class="tm-text-link" target="_parent">TemplateMo</a></p>
                  </div>
              </div>
          </div>
      </footer>
     
    )
}
export default Footer;